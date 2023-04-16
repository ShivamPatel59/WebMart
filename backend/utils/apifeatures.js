class Apifeatures{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }
    search(){
        // console.log(this.queryStr.name);
        const name = this.queryStr.name ? {
            name:{
                $regex:this.queryStr.name,
                $options:'i',
            },
        }:{};
        // console.log(name);

        this.query = this.query.find({...name});
        return this;
    }
    filter(){
        const queryCopy = {...this.queryStr};
        // console.log(queryCopy);
        //Removing fields from the query
        const removeFields = ['name','page','limit'];
        
        removeFields.forEach(el => delete queryCopy[el]);

        //Filtering for price, ratings etc

        // console.log(queryCopy);

        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g,match => `$${match}`);
        // console.log(queryStr); 

        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resultPerPage * (currentPage - 1);
        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }

};

module.exports = Apifeatures;