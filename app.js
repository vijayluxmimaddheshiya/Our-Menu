// items 
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./Components/Assets/menu-item.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "brunch",
      price: 13.99,
      img: "./Components/Assets/item-2.jpg",
      desc: `Enjoy our savory burger with crisp fries—a perfect blend of juicy chicken, fresh toppings, and golden, seasoned potatoes.`,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./Components/Assets/item-3.jpg",
      desc: `Dive into pure indulgence with our creamy milkshakes.A delightful treat that promises to sweeten any moment.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./Components/Assets/item-4.jpg",
      desc: `Savor the comforting warmth of perfectly poached eggs served on golden toast, accompanied by hearty beans in savory gravy—a classic dish that satisfies with every bite.
`,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./Components/Assets/item-5.jpg",
      desc: `Experience a savory twist with our eggs in burger, where a perfectly cooked egg meets a veggie patty, topped with melted cheese and fresh fixings. A delightful fusion of flavors in every bite. `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./Components/Assets/item-6.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./Components/Assets/item-7.jpg",
      desc: `Indulge in our creamy Oreo Shake, blending rich vanilla ice cream with crushed Oreo cookies for a decadent treat that’s both smooth and satisfying.`,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./Components/Assets/item-8.jpg",
      desc: `Enjoy our classic burger paired with crispy fries—a perfect harmony of juicy chicken, fresh toppings, and golden, seasoned potatoes that satisfy every craving.`,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./Components/Assets/item-9.jpg",
      desc: `Delight in our oversized shakes designed for sharing, 
      crafted with creamy goodness and topped with indulgent treats, 
      creating a memorable experience for you and your companion.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "lunch",
      price: 22.99,
      img: "./Components/Assets/item-10.jpg",
      desc: `Savor our vegan steak, a culinary masterpiece crafted with plant-based 
      ingredients that deliver the hearty texture and robust
      flavors you crave, guilt-free and deliciously satisfying.`,
    },
    {
      id: 11,
      title: "pizza",
      category: "dinner",
      price: 22.99,
      img: "./Components/Assets/item-11.jpg",
      desc: `Savor our vegan steak, a culinary masterpiece crafted with plant-based 
      ingredients that deliver the hearty texture and robust
      flavors you crave, guilt-free and deliciously satisfying.`,
    },
    {
      id : 12,
      title : "Bruschetta Trio Sampler",
      category : "brunch",
      price : 15.99,
      img :"./Components/Assets/item-12.jpg" , 
      desc : `Creamy mashed avocados mixed with fresh lime juice, 
      cherry tomatoes, red onion, and cilantro. Add a kick with optional
       jalapeños, served on crunchy toasted baguette slices for a vibrant and delightful appetizer.`

    }
  ];
  const sectionCenter = document.querySelector('.section-center');
  const container = document.querySelector('.btn-container')
  
  
  // load all items 

  // get all unique categories 

  // get only unique categories 
  window.addEventListener('DOMContentLoaded' , function(){
    displayMenuItems(menu);
    displayMenuButtons();
    
  });
  // filter items 
  
function displayMenuItems(menuItems){
    console.log("display menuItems function is retrived")
    let displayMenu = menuItems.map(function(item){
        return `
       <article class="menu-item">
         <img src="${item.img}" class="photo" alt="${item.title}">
         <header>
           <h4>${item.title}</h4>
           <h4 class="price">${"Rs."+" "+item.price}</h4>
         </header>
         <p class="item-text">
           ${item.desc}
         </p>
         <div class="item-info">
         </div>
       </article>
     `;
     });
     displayMenu = displayMenu.join("");
    /// console.log(displayMenu)
     sectionCenter.innerHTML = displayMenu // by doing this all the elements of menu got into the sectionCenter in string format 
     console.log("section center get all data")

}
function displayMenuButtons(){
  const categories = menu.reduce(function(values , item){
    if(!values.includes(item.category)){
      values.push(item.category);
    }
    return values

  },["all"]);
  const CategoryBtns = categories.map(function(category){
    return `<button class = "filter-btn"  type = "button"
    data-id=${category}> ${category} </button>`
    // do not get confused we commented out the filter btn in html but the class is dynamically defined in app that is why it is there to retrieve 
  }).join("");
  console.log(CategoryBtns)
  container.innerHTML = CategoryBtns;
  const filterBtns = container.querySelectorAll('.filter-btn')
  // container and document both could work in above case 
  filterBtns.forEach(function(btn){
    btn.addEventListener('click' , function(e){
    const category = (e.currentTarget.dataset.id);
    const menuCategory = menu.filter(function(menuItem){ // here the menuItem is just new variable it has nothing to do with that function or anything 
     if(menuItem.category === category){
         return menuItem;
     }
    
    })
   // console.log(menuCategory);
   if(category === "all"){
     displayMenuItems(menu) // everything need to be displayed 
   }else{
     displayMenuItems(menuCategory)
   }
    });
     
   });

}


// reduce method 
// reduce the elements of the array to a single value 
