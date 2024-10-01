//   popular things
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("tourCard");
  console.log(container);
  const tours = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/220a/d79b/8a48694cc2cf188b48e3d1b6ece9e021?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hh9tBRhwYeU2IvSGyUDH2K0Jwo7~J9wa1LORMpOKkaqg4JLrryVBaZ6rtDWHwfPmc~ZDUaPHzhcB5fXFHIJweeGQBUrM6OqGCcynKf11NdkUfs-y4QsswOTbhbISspaPVH1BtdJDXWWGPB3A8QYIQJvaJk-py4aq4bvS8tEO~-ZC7RiTomCMCUNJEj9uEg-J4~URiCa2FbsiwLRCVfMSRONrVxCnxL2tFZ6V9lDw6qZsAW2Lk~rW5krv94eaZPsyCvTNwDVXDdMzxEut0rJMMxBiDQHLynXEiR~h9s5ZNeCwQkMJplwecG6ROlaTjzPXMvFoX3gJgHxfCoJzwEwO8Q__",
      location: "Paris, France",
      title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
      rating: "4.8",
      reviews: 243,
      price: 189.25,
      days: "4 days",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/49c5/04f4/3d4f7b32df6b67239ccaaba51612b2da?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=htZYTsW4eZ5mWkFojICN4tPLGic0x3btw-rXUeEiLQxusRSYIbqHbzWeBc5-d83lNx8JT7UIj4dGq7Y3ieJgMDn8fjsQwS-lSnQgGo8z1mcGgKBZoHvR4uT4ZyTLPEk4t35rMd79Kc8PkBuUPC9czd4mNMSd6i1bDeSgGaHCWemuliWuxtFh35DO3UNPMWQr5pcOxjf1AMSo3M247MYfkbTYnnyBCcl3b484hn9LB687L~FA0Bid~7zbEjdhbRL8Aawca1cy5lkAJUCAs4tQbaQj7UDHvbuSFbvSA3qRSHIT8fC23YtHGG4kWSkjioiwItXv73Zyr0Ix9j2MQboU0A__",
      location: "New York, USA",
      title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
      rating: "4.8",
      reviews: 243,
      price: 225,
      days: "4 days",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/4368/72bd/0534eef69d1e9bf8c0c2618748563401?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WkTwQ0~pb3jgX0mLGcZRfmAuAA0~01dIn6E2zbGsa6xscbRNLpXKkRgBqXvI20sQ3L-~s9DDI1XyFKc69u4vwhp2WrjyxAbMnrFuiFgwK3w32NdJdea0KPhNzZQSlyZWeqcmXhklhkBIw8hQ5M6vJbuGnUHWnr1~sy0WXix~KHgG~gDhYteW1n5jl-HJYejZtONkYKiN1NpVScxfbfHFLnEF~v0LrkSDCOz7PxpVhqJFUo1NsmWOi~G7LRujfIddXN3fv5FPmbIU~xa1bU3Mm7O4xpHbjae9FeCmz5lGVcDsy9AnwTkt-DvksT14hx3VdzRv8dwRlIYda5TxQRqF2A__",
      location: "London, UK",
      title: "Westminster Walking Tour & Westminster Abbey Entry",
      rating: "4.8",
      reviews: 243,
      price: 943,
      days: "4 days",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/2a90/8b0f/20890da82ba67297275cea61b96e82a2?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q1mjoRZsDTgnquRQwxXbYI2R10gfwQ1mAQARfr-VzEYPjvWryQmycKilgZBFsyioFYRyGrplPwdIAVaurR1YMaMw1Xdb8czt6GFCtIk8wznJ3b-mfSSKeLr3Vbm~cn2dz46~PdFp43h4Cr1ntjkYHnOaZJ2UB-hg7uOkP4hOVdW7OSdSggcZ8gXM1fRXQNwLR3eu2oiYfpL5SQlgR8lGDRoGpW1cNJl-KCvtF5h2hQ~11uua7RFqWnmcvVaK9lHfeLTJlj1zwmpZKa1bsednACSjOc-bkkweVfHRxnF3~LwcT9jXNkZOhh6OXUUbsuk68nXKG8r0eG-IRfTMRZno0w__",
      location: "New York, USA",
      title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
      rating: "4.8",
      reviews: 243,
      price: 771,
      days: "4 days",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/8624/7d76/a76467dff7802a759e089526770ab592?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QF7CdvweB12qh9iU1kZaivsfSkNUZEm5dmZkH-DPNMHW~6f~TXx7kBVRtlEQXm-pt3AYoOikpplVvEAZnSYMpy7NyaeYlr1QdWgY296BL3JdQNwUVOlBK0aRFscNvtkHvuBfTznXtJzvQ8nGzUP5Hc1LunRiBOc3kJBVVvZQrFHDK~WrAz43aO289UFaePgzHVy77shTqMiFG2BETw3eYzT0lu0KCr8rH3M340gVgAFxj1nM40H2KlGfPXKQzu1~2dGUa3YpBj6bLbioB2DzC4sISUxKTJhhEzMHjbtHSy0mApIVKPMxdfyJbbz5-0sLLdq8Fi2UUyy2HjaHJNkPgA__",
      location: "Paris, France",
      title: "Space Center Houston Admission Ticket",
      rating: "4.8",
      reviews: 243,
      price: 189.25,
      days: "4 days",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/29f4/7e9e/ccfdecb45cd274f69e09d4509466f36a?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SSAcDAfJSq710srVPFJjpY8KSKkYE1QQqnew6-GL8GHBn-FXcTSZGMGrCbRoV91YURXPcd7CpsXvM3vPWnT1FvQ832bL02tc~29dyNC1Ki3fE6fxTNcepdFe~6Sj1c54GltVCpamAvMG50p7WWWpjJXrzA~Ao8xKXioUKRJtfqyMW-u3rJFwmxtUAvPAmTXjEg1~W8LQfAspk-EuQP68eP7erSlAbsuEPQmlFxpvRwOi~uefyjVF2kMjtwJ-0Qv6eZIIWmy30Hm1~Ims46PoUIBzosBdvVkzK~t34Y9UwZDRfi1OoWik~j1mlt0nSB6~YY9XeJIAnuonjCQ7VTgDYQ__",
      location: "New York, USA",
      title: "Clear Kayak Tour of Shell Key Preserve and Tampa Bay Area",
      rating: "4.8",
      reviews: 243,
      price: 225,
      days: "4 days",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/eec0/c66c/bda6729acf51a650a1df616135b9353c?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fjvezHqWF-xTD5xbEm4Vn1-iOJDKuZGrwSlTYOclieAVI-5v0Nsgts1gQbg3eBSb-6f9muIxB-iLwXQGwfsQexweKhrCLnYKlqgHzRHodhioeSs-7sFX08-KY36j4AYaLAoH6tffqrNse-2Xr2nssLxYvql6QSXju-FoK5sju0b3kOHHYYmsjPvywa6o0OYWNMNM1-u6cpzQ~ok2aq-IM4S7rn0UFs3SQZgiW~xbVbVFLY8lRTnDUCvxeXq4AiyQkdL5jgAs7gpxoH1lnjv3JbsC88OPqKPgIRH1LL4qbsq-cUvwMdX6ZJ69-xz7s~DeHw~Ny-BseAQuuDMLWOBWUw__",
      location: "London, UK",
      title: "History and Hauntings of Salem Guided Walking Tour",
      rating: "4.8",
      reviews: 243,
      price: 943,
      days: "4 days",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/8a0f/f065/b188a419f18276bbd0960097b150dfeb?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ro3kpXzLt0sfKhKZumR9ruY5YSqS8FNAzzlbK7hQMCa~K~GC0yagcjSyw207P36ENZeAnCH8uGcq~fCUXnf7wRQu-6UyAxpmt5tz56Ru9cu9e1dpvGHiG6vu0kQINyC6HHx841WAp-uifqq9~BAAEOap6n5bSGt~pklSQvHHL64ZlRGxngkBNywo5zb5CvRAo5biZUdVskhWqTtjRIVWvV54hH3PTjPH-foN4G3UQQIn82INvwD1kac2YUH8pAg5PEAqD3pC5t2hIdBZVNY0VcopljO9yHKYf3x6cCY31W7g9QkI0L6xBZrQO9G904NuTncaNPcY8gn-GEb58XoyDw__",
      location: "New York, USA",
      title:
        "Mauna Kea Summit Sunset and Stars Free Astro Photos Hilo Kona Waikoloa Pick Up",
      rating: "4.8",
      reviews: 243,
      price: 771,
      days: "4 days",
    },
  ];

  tours.forEach((tour) => {
    const card = document.createElement("div");
    card.classList.add("tour-card");
    console.log("hello");
    card.innerHTML = `
        <img
            src="${tour.image}"
            alt="${tour.title}"
          />
          <div class="tour-details">
            <div class="titleGrid">
              <div class="titleGriditem1">
                <p class="tour-location">${tour.location}</p>
              </div>
              <div class="titleGriditem2">
                <p class="buttonCircle"></p>
              </div>
            </div>
            <div class="cardDetails">
              <h3 class="cardTitle">
                ${tour.title}
              </h3>
              <p class="tour-rating">${tour.rating} (${tour.reviews})</p>
              <div class="titleGrid2">
                <div class="item1">
                    <p>${tour.days}</p>
                </div>
                <div class="item2">
                    <p class="tour-price">From <strong>$${tour.price.toFixed(
                      2
                    )}</strong> </p>
                </div>
              </div>
            </div>
          </div>
        `;

    container.appendChild(card);
  });
});
