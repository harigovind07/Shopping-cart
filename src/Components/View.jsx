import React from 'react'

const View = () => {
  return (
    <div>
        <div>
      <div className="container">
      <nav class="navbar fixed-top navbar-expand-lg bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><b>Shopping Cart</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/"><b>Add</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/search"><b>Search</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/view"><b>View</b></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className="row g-3" style={{marginTop:'25px'}}>
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    <table class="table">
  <thead>
    <tr>
      <th scope="col"><b>ID</b></th>
      <th scope="col"><b>TITLE</b></th>
      <th scope="col"><b>PRICE</b></th>
      <th scope="col"><b>DESCRIPTION</b></th>
      <th scope="col"><b>CATEGORY</b></th>
      <th scope="col"><b>IMAGE</b></th>
      <th scope="col"><b>RATING</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</td>
      <td>$109.95</td>
      <td>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</td>
      <td>men's clothing</td>
      <td><img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven Backpack" width="100px" ></img></td>
      <td>3.9 (120 reviews)</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mens Casual Premium Slim Fit T-Shirts</td>
      <td>$22.30</td>
      <td>Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.</td>
      <td>men's clothing</td>
      <td><img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="Slim Fit T-Shirts"width="100px"  ></img></td>
      <td>4.1 (259 reviews)</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mens Cotton Jacket</td>
      <td>$55.99</td>
      <td>Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.</td>
      <td>men's clothing</td>
      <td><img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="Cotton Jacket" width="100px"  ></img></td>
      <td>4.7 (500 reviews)</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Mens Casual Slim Fit</td>
      <td>$15.99</td>
      <td>The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.</td>
      <td>men's clothing</td>
      <td><img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="Casual Slim Fit" width="100px"  ></img></td>
      <td>2.1 (430 reviews)</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet</td>
      <td>$695.00</td>
      <td>From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.</td>
      <td>jewelery</td>
      <td> <img src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" alt="Dragon Station Chain Bracelet" width="100px"  ></img></td>
      <td>4.6 (400 reviews)</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Solid Gold Petite Micropave</td>
      <td>$168.00</td>
      <td>Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.</td>
      <td>jewelery</td>
      <td><img src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt="Petite Micropave" width="100px" ></img></td>
      <td>3.9 (70 reviews)</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>White Gold Plated Princess</td>
      <td>$9.99</td>
      <td>Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...</td>
      <td>jewelery</td>
      <td><img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="White Gold Plated Princess" width="100px"  ></img></td>
      <td>3.0 (400 reviews)</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Pierced Owl Rose Gold Plated Stainless Steel Double</td>
      <td>$10.99</td>
      <td>Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel</td>
      <td>jewelery</td>
      <td><img src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" alt="Rose Gold Plated Earrings" width="100px"  ></img></td>
      <td>1.9 (100 reviews)</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>WD 2TB Elements Portable External Hard Drive - USB 3.0</td>
      <td>$64.00</td>
      <td>USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system</td>
      <td>electronics</td>
      <td><img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" alt="2TB External Hard Drive" width="100px"  ></img></td>
      <td>3.3 (203 reviews)</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s</td>
      <td>$109.00</td>
      <td>Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)</td>
      <td>electronics</td>
      <td> <img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" alt="SanDisk SSD" width="100px"  ></img></td>
      <td>2.9 (470 reviews)</td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td>Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5</td>
      <td>$109.00</td>
      <td>3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.</td>
      <td>electronics</td>
      <td> <img src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg" alt="Silicon Power 256GB SSD" width="100px"  ></img></td>
      <td>4.8 (319 reviews) </td>
      </tr>
      </tbody>
      </table>
      </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default View
