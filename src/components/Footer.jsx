import React from "react";

export default function Footer() {
  return (
      <footer className="bg-[#08320b]  px-2 py-20">
      <div className="contain ml-20 flex justify-start space-x-10 ">
          {/* Footer Section 1 */}
          <div className="footer-section space-y-7">
            <h4 className="text-white font-semibold">
              <img src="#" className="h-20 w-auto" alt="Logo" />
              <br />
              Happen active county. Winding morning<br></br> ambition shyness
              evident to poor.<br></br> Because elderly new to the point
              <br></br> to main success.
            </h4>

            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter Your Email"
                maxLength="2"
                size="2"
                className="form-control"
                name="email"
              />
              <button type="submit">Go</button>
            </form>
          </div>
          <div className="border-1 border-gray-300 h-[300px]"></div>

          {/* Footer Section 2 */}
          <div className="footer-section space-y-7">
            <h3 className="text-white font-bold">Explore</h3>
            <ul className="text-white space-y-2">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Legal Notices</a>
              </li>
              <li>
                <a href="#">Privacy Notices</a>
              </li>
              <li>
                <a href="#">Security Information</a>
              </li>
              <li>
                <a href="#">Trust Center</a>
              </li>
            </ul>
          </div>

          {/* Footer Section 3 */}
          <div className="footer-section space-y-7">
            <h4 className="text-white font-bold">Recent Posts</h4>
            <ul className="text-white space-y-2">
              <li className="flex items-center space-x-3">
                <img
                  src="https://validthemes.net/themeforest/wp/agrul/wp-content/uploads/2023/04/blog-2-150x150.jpg"
                  height="100"
                  width="100"
                  className="rounded-lg"
                  alt="GitHub"
                />
                <p className="text-yellow-500">
                  April 14, 2023<br></br>Announcing if the resolution sentiments
                </p>
              </li>
              <br></br>

              <li className="flex items-center space-x-3">
                <img
                  src="https://validthemes.net/themeforest/wp/agrul/wp-content/uploads/2023/04/blog-1-150x150.jpg"
                  height="100"
                  width="100"
                  className="rounded-lg"
                  alt="GitHub"
                />
                <p className="text-yellow-500">
                  April 14, 2023<br></br>The Super Soil Organic Farming
                </p>
              </li>
            </ul>
          </div>

          {/* Footer Section 4 */}
          <div className="footer-section space-y-7">
            <h4 className="widget-title text-white font-bold">Contact Info</h4>
            <ul className="text-white space-y-2">
              <li className="flex items-center space-x-3">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/?size=48&id=2yfgHA8XGxvd&format=gif"
                    height="20px"
                    width="25px"
                    className="rounded-md"
                  />
                </div>
                <strong>Address:AITR Mangliya,Indore</strong>
              </li>
              <li className="flex items-center space-x-3">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/?size=48&id=tnnUFgHrPmR0&format=gif"
                    height="20px"
                    width="25px"
                    className="rounded-md"
                  />
                </div>

                <strong>Email:abc@gmail.com</strong>
              </li>
              <li className="flex items-center space-x-3">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/?size=40&id=lCYOZaaeqtKc&format=gif"
                    height="20px"
                    width="25px"
                    className="rounded-md"
                  />
                </div>
                <strong>Phone:+123 34598768</strong>
              </li>
            </ul>
          </div>
        </div>
      </footer>
  );
}
