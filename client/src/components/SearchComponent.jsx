import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";

export default function AddClientModal() {
  return (
    <>
      <form
        // onSubmit={handleSubmit}
        className="form form-label-right"
      >
        <div className="form-group row">
          <div className="col-lg-4 mb-4">
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Type here..."
              onChange={(e) => {
                // setSearch(e.target.value);
              }}
            />
          </div>
          <div className="col-lg-4">
            <div className="card-toolbar">
              <button
                type="submit"
                className="btn btn-danger mr-2"
                // disabled={isSubmitting}
              >
                <span>Search</span>
                {/* {
                isSubmitting 
                && (
                  <span className="mx-3 spinner spinner-white"></span>
                )} */}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
