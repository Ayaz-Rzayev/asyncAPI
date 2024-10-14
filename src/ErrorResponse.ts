import HttpStatusCode from "./httpStatusCodes";

class ErrorResponse extends Error {
  status: HttpStatusCode;

  constructor(status: HttpStatusCode, type: "error") {
    super();
    this.status = status;
  }
}


export default ErrorResponse;