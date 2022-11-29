import React from "react";

function TrueContact(props) {
  return (
    <div>
      <input
        class="form-control mb-2"
        name="name"
        type="text"
        required
        placeholder="Your Name"
        aria-label="default input example"
      />
      <input
        class="form-control mb-2"
        name="user-email"
        type="text"
        required
        placeholder="Your E-mail"
        aria-label="default input example"
      />
      <div class="form-floating">
        <textarea
          class="form-control"
          name="message"
          required
          placeholder="Leave a comment here"
          id="floatingTextarea"
        ></textarea>
        <label for="floatingTextarea">Your Message</label>
      </div>
      <div className="d-grid gap-2">
        <button type="submit" className="x btn btn-outline-primary mt-3">
          Submit <i class="ms-2 far fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}

export default TrueContact;
