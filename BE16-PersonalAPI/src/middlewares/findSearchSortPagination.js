"use strict";

//Query Handler Middleware

module.exports = async (req, res, next) => {
  // Filtering & Searching & Sorting & Pagination
  //* Filter: searches for absolute equality, Search; searches for partial equality

  //*FILTERING:
  // URL?filter[fieldName1]=value1&filter[fieldName2]=value2
  const filter = req.query?.filter || {};

  //* SEARCHING:
  // URL?search[fieldName1]=value1&search[fieldName2]=value2
  // {"<field>" : {"$regex" : "pattern", "$options": "<options"}}
  const search = req.query?.search || {};

  // console.log(search.title);
  // console.log(search['title']);
  // search['title']= 'this is new value' // to change the value
  for (let key in search) search[key] = { $regex: search[key], $options: "i" };

  //* SORTING:
  // URL?sort[fieldName1]=value1&sort[fieldName2]=value2
  const sort = req.query?.sort || {};

  //* PAGINATION:
  // URL?page=3&limit=15&skip=20

  //*LIMIT:
  let limit = parseInt(req.query?.limit);
  limit = limit > 0 ? limit : parseInt(process.env.PAGE_SIZE) || 20;

  //*PAGE:
  let page = parseInt(req.query?.page);
  page = page > 0 ? page : 1;

  //* SKIP:
  let skip = parseInt(req.query?.skip);
  skip = skip > 0 ? skip : (page - 1) * limit;

  console.log(limit, page, skip);

  res.getModelList = async (Model, populate=null) => {
   return await 
      Model.find({ ...filter, ...search })
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .populate(populate); 
  };
  res.getModelListDetails = async(Model)=>{
    const data = await Model.find.countDocuments({ ...filter, ...search })
  console.log(data);
  let details = {
    filter,
    search,
    limit,
    sort,
    skip,
    page,
    totolRecords: countDocuments,
    pages:{
      previous: (page> 1 ? page -1 : false),
      current:page,
      next: (page+1) > Math.ceil(count / limit) ? page + 1 : false, 
      total : Math.ceil(count / limit)

    }
  };
    // if(details.pages.next > details.pages.total) details.pages.next = false
    if (details.totolRecords<= limit) details.page = false
  return details 
  }
  next()
};
