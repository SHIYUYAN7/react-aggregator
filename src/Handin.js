import React from 'react';
import './Handin.css';

function HandinPage() {
  return (
    <div className='Handin'>
      <header>
          <div class="header-container">
              <h1>Handin Webpage</h1>
              <div class="small-content-style">By Shiyu Yan</div>
          </div>
      </header>
      <main>
        <div class="main-container">
          <div class="paragraph-space"></div>
          <section id="introduction">
              <h2>React Development Assignment</h2>
              <div class="small-paragraph-space"></div>
              <div class="small-content-style"><span class="first-letter">T</span>he Cryptopunks Shop project highlights the innovative fusion of art, technology, and NFTs through a user-centric design and React application. By analyzing competitive web platforms, we aim to identify essential features that engage users and distinguish our approach for a more efficient online experience.</div>
          </section>
          <div class="paragraph-space"></div>
            <section id="usability-problems">
              <h3>Competitive Analysis</h3>
              <div class="small-content-style">Competitive comparisons show that Spotify's robust sharing features and personalized recommendations make it a socially appealing platform. Amazon offers an efficient shopping experience with easy-to-add products and a prominent shopping cart location, while Airbnb's one-click add favorites feature improves ease of use and increases the likelihood that users will choose based on thumbnails as a first impression.</div>
              <div class="small-paragraph-space"></div>
              <table>
                <tr>
                  <th>Factors / Website</th>
                  <th>Spotify</th>
                  <th>Amazon</th>
                  <th>Airbnb</th>
                </tr>
                <tr>
                  <td>Easy to add stuff to aggregator</td>
                  <td>Click add to playlist on the detail page.</td>
                  <td>Click add to cart on the detail page.</td>
                  <td>Click on the heart directly on the browse page or the detail page.</td>
                </tr>
                <tr>
                  <td>Easy to find aggregator</td>
                  <td>Fixed in a more prominent place on the left side of the page.</td>
                  <td>Always fixed in the top right corner of the page.</td>
                  <td>Exists within the user's information and requires two clicks.</td>
                </tr>
                <tr>
                  <td>Easy to remove item in aggregator</td>
                  <td>Click on the three dots icon and then click remove</td>
                  <td>Click delete button to remove it directly</td>
                  <td>Click the heart again to remove</td>
                </tr>
                <tr>
                  <td>Share Aggregator's item</td>
                  <td>Click on the three dots icon and then click share</td>
                  <td>Click share button to share it directly</td>
                  <td class="no-functionality">✕</td>
                </tr>
                <tr>
                  <td>Share Aggregator</td>
                  <td>Click on the three dots icon and then click share</td>
                  <td class="no-functionality">✕</td>
                  <td>Click share button to share it directly</td>
                </tr>
                <tr>
                  <td>Personalized recommendations</td>
                  <td>Recommendations on the bottom</td>
                  <td>Recommendations on the right side</td>
                  <td class="no-functionality">✕</td>
                </tr>
              </table>

              
              {/* <div class="ori-image-container">
                <img src="assets/origin-home-page.png" alt="Origin home page screenshot"></img>
              </div> */}
              <div class="small-paragraph-space"></div>
              <div class="hover-hint">Strengths and Weaknesses</div>
              <div class="ori-issues">
                <div>Spotify excels in its sharing capabilities, allowing users to easily share individual items or entire playlists. However, its deletion process seems to have more steps than Amazon's direct delete option. Spotify's personalized recommendations at the bottom of the page can increase user engagement.</div>
                <br></br>
                <div>Amazon is easy in the way it adds items to the cart, and its cart icon position is fixed at the top right, always within sight for easy access. Its direct delete option simplifies the user experience. However, the lack of a sharing feature in Amazon's cart may prevent users from analyzing their shopping lists to others.</div>
                <br></br>
                <div>Airbnb allows users to easily add listings to their favorites with a single click on the browse or details page, which is a streamlined process. However, favorites are less accessible, requiring two clicks to access user information. The lack of personalized recommendations for wish lists may limit the platform's ability to recommend relevant new listings to users, which may impact user outreach.</div>
              </div>
              <div className='paragraph-space'></div>
              <section id="feature-implement">
                <h3>Several features stand out for implementation:</h3>
                <div class="small-content-style">The Cryptopunks Shop project highlights the innovative fusion of art, technology, and NFTs through a user-centric design and React application. By analyzing competitive web platforms, we aim to identify essential features that engage users and distinguish our approach for a more efficient online experience.</div>
                <div class="feature-list">
                  <div class="feature-item">
                      <h3>1. One-click Add to Aggregator</h3>
                      <p>Similar to Airbnb's heart icon on the browse page, providing an intuitive and immediate way to save items can enhance user interaction.</p>
                    </div>
                    <div class="feature-item">
                      <h3>2. Visible and Accessible Aggregator</h3>
                      <p>Like Amazon, having the aggregator in a fixed and prominent place ensures that it's always within easy reach.</p>
                    </div>
                    <div class="feature-item">
                      <h3>3. Direct Delete Option</h3>
                      <p>Amazon's approach streamlines the process of removing items, which is essential for a positive user experience.</p>
                    </div>
                  </div>
              </section>
              <div className='small-content-style'><span class="first-letter">T</span>o plan the implementation of these features, start with user flow diagrams to outline the steps a user would take to interact with each feature. Then, create sketches to visualize how each feature fits within the existing design framework. Finally, high-fidelity mockups would bring clarity to the visual and interaction design before moving to prototyping and testing.</div>
              <div class="ori-image-container">
                <img src={process.env.PUBLIC_URL + "/images/sketch.jpeg"} alt="Sketches Screenshot" />
              </div>
              <div className='small-content-style'>The <a className='hyperlink' href='/' >Cryptopunks Shop</a>, designed for NFT enthusiasts, leverages React for a seamless user experience, enabling dynamic filtering, sorting, and aggregation of digital art. Users can easily filter Cryptopunks by attributes like glasses and smoke, sort them by price, and aggregate selections in a cart for an informed purchasing decision. This platform blends art, technology, and commerce, offering an intuitive interface that reflects users' diverse preferences and investment strategies, embodying innovation in the digital art space.</div>
            </section>
        </div>
      </main>

      <footer>
          <div class="footer-container">
              <div class="footer-content">Copyright 2024 Shiyu Yan</div>
          </div>
      </footer>
    </div>
  );
}

export default HandinPage;