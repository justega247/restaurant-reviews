import http from "../http-common";

class RestaurantDataService {
  // Updated on mongodb-atlas serverless
  getAll(page = 0) { 
    return http.get(`restaurants?page=${page}`);
  }

  // Updated on mongodb-atlas serverless
  get(id) {
    return http.get(`restaurant?id=${id}`);
  }

  // Node version
  // get(id) {
  //   return http.get(`/id/${id}`);
  // }

  // Updated on mongodb-atlas serverless
  find(query, by = "name", page = 0) {
    return http.get(`restaurants?${by}=${query}&page=${page}`);
  }

  // Updated on mongodb-atlas serverless
  createReview(data) {
    return http.post("/review-new", data);
  }

  // Node version
  // createReview(data) {
  //   return http.post("/review", data);
  // }

  // Updated on mongodb-atlas serverless
  updateReview(data) {
    return http.put("/review-edit", data);
  }

  // Node version
  // updateReview(data) {
  //   return http.put("/review", data);
  // }


  deleteReview(id, userId) {
    return http.delete(`/review-delete?id=${id}`, {data: {user_id: userId}});
  }

  // Node version
  // deleteReview(id, userId) {
  //   return http.delete(`/review?id=${id}`, {data: {user_id: userId}});
  // }

  // Updated on mongodb-atlas serverless
  getCuisines() {
    return http.get(`/cuisines`);
  }
}

export default new RestaurantDataService();
