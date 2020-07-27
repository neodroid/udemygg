import fetch from "node-fetch";

async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch("https://teachinguide.azure-api.net/course-coupon?sortCol=students&sortDir=DESC&length=12&page=1&inkw=&discount=100&language=English&cat=Business", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9,id;q=0.8",
      "authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1OTIxNCwiZW1haWxfaWQiOiJrZXZpbmFobWFkLmZAZ21haWwuY29tIiwicGxhbiI6Ik9OX1RSSUFMIiwic3ViX3BsYW4iOiJPTl9UUklBTCIsInBsYW5fcGVyaW9kIjpudWxsfQ.5X5Gh93LEynveLK8LrTuRnYi6hSLreXR1CPqz1M5zqQ",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site"
    },
    // "referrer": "https://www.teachinguide.com/udemy-coupon-codes/",
    // "referrerPolicy": "no-referrer-when-downgrade",
    "body": null,
    "method": "GET",
    // "mode": "cors"
  });
  return res.json();
  // console.log('succes');
}

export default async (req, res) => {
  var dataTotal=[],i;
  const data = await getSortedPostsData();
  
 const results = (data.results);
  //res.status(200).json({ data});
  //console.log(data.pages);

    
    async function getSortedPostsData0() {
      // Instead of the file system,
      // fetch post data from an external API endpoint
      const res = await fetch("https://teachinguide.azure-api.net/course-coupon?sortCol=students&sortDir=DESC&length=200&page=1&inkw=&discount=100&language=English&cat=Development%7CBusiness%7CIT%20%26%20Software%7COffice%20Productivity%7CPersonal%20Development%7CDesign%7CMarketing%7CLifestyle%7CPhotography%7CHealth%20%26%20Fitness%7CTeaching%20%26%20Academics%7CMusic%7CFinance%20%26%20Accounting", {
        "headers": {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9,id;q=0.8",
          "authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1OTIxNCwiZW1haWxfaWQiOiJrZXZpbmFobWFkLmZAZ21haWwuY29tIiwicGxhbiI6IkZSRUVfUExBTiIsInN1Yl9wbGFuIjoiRlJFRV9QTEFOIiwicGxhbl9wZXJpb2QiOm51bGx9.SiKWN8QYpeyuiNosjM_5CgCiqKWMEz5etZao-PLZz6Q",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site"
        },
        // "referrer": "https://www.teachinguide.com/udemy-coupon-codes/",
        // "referrerPolicy": "no-referrer-when-downgrade",
        "body": null,
        "method": "GET",
        // "mode": "cors"
      });
      return res.json();
      // console.log('succes');
    }
    
    const data0 = await getSortedPostsData0();
    const results0 = (data0.results);
    dataTotal = dataTotal.concat(results0);
    var key = "CouponLink"
    var key1 = "CouponCode"
    var key2 = "CouponId"

    dataTotal.map(
      state => 
      delete state[key]
    );
    dataTotal.map(
      state => 
      delete state[key1]
    );
    dataTotal.map(
      state => 
      delete state[key2]
    );
  

  
  
  
  
 
  res.status(200).json({ dataTotal});
  //console.log(results0[0]);
  

};
