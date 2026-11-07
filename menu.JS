/*
  ============================================================
  EDIT THIS FILE TO CHANGE THE TREATS ON YOUR WEBSITE
  ============================================================

  HOW TO SWAP A PHOTO (easiest way)
  1. Take or pick your new photo. A JPG around 1000 pixels wide is perfect.
  2. Name it EXACTLY the same as the old photo (example: cookies.jpg).
  3. In GitHub, click "Add file", then "Upload files", and drop the photo in.
     Commit the change. It replaces the old one. Wait a minute and refresh your site.

  HOW TO ADD A NEW TREAT
  1. Upload the new photo to your main folder (the same place as index.html).
  2. Copy one whole treat below (from the { to the },) and paste it under the last one.
  3. Change the name, description and photo file name. Keep the quote marks and commas.

  HOW TO HIDE A TREAT (for example when you are out of season)
  Change   show: true   to   show: false   . Change it back to show it again.

  HOW TO REMOVE A TREAT
  Delete that whole treat, from the { to the },

  Photo tips: use bright light, a plain background and a close-up of the treat.
  Only list treats you are allowed to sell under Minnesota cottage food rules.
*/

const TREATS = [
  {
    show: true,
    name: "Dipped Oreos",
    description: "Dipped in chocolate and decorated for every season.",
    photo: "holiday-oreos.jpg",
    alt: "White chocolate dipped Oreos with red and green sprinkles"
  },
  {
    show: true,
    name: "Cereal Cookies",
    description: "Soft, chewy cookies with a fun crunchy twist on top.",
    photo: "cookies.jpg",
    alt: "Soft cookies topped with cereal squares"
  },
  {
    show: true,
    name: "Dipped Cookies",
    description: "Half dipped and decorated. Perfect for gifts and celebrations.",
    photo: "dipped-cookies.jpg",
    alt: "Cookies dipped in white chocolate with heart sprinkles"
  },
  {
    show: true,
    name: "Chocolate Dipped Bites",
    description: "Rich chocolate-covered bites, some topped with crunchy peanuts.",
    photo: "truffles.jpg",
    alt: "Chocolate dipped treats topped with chopped peanuts"
  },
  {
    show: true,
    name: "Chocolate Pecan Toffee",
    description: "Crisp, buttery, chocolatey and topped with pecans.",
    photo: "toffee.jpg",
    alt: "Chocolate and pecan cracker toffee"
  },
  {
    show: true,
    name: "Cinnamon Glazed Donuts",
    description: "Soft baked donuts with a cinnamon swirl and sweet glaze.",
    photo: "donuts.jpg",
    alt: "Cinnamon swirl donuts with glaze"
  },
  {
    show: true,
    name: "Chocolate Chip Oreos",
    description: "Milk chocolate dipped and finished with mini chocolate chips.",
    photo: "chocolate-oreos.jpg",
    alt: "Milk chocolate covered Oreos with chocolate chips"
  }
];
