import img1 from "./assets/burger.jpeg";
import sandwich from "./assets/Sandwich.jpeg";
import img_pancakes from "./assets/pancake.jpeg";
import img_omelette from "./assets/Omelette.png";  
import img_idli from "./assets/IdliSambar.jpeg";
import img_dosa from "./assets/Masala Dosa.webp";
import img_poha from "./assets/poha.jpeg";
import img_upma from "./assets/upma.jpeg";
import img_pizza from "./assets/piz2.jpeg";
import img_salad from "./assets/salad.jpeg";
import img_thali from "./assets/vegthali.jpeg";
import img_chole from "./assets/cholebhature.jpeg";
import img_friedrice from "./assets/fried rice.jpeg";
import img_manchurian from "./assets/Manchurian.jpeg";
import img_roll from "./assets/pannerroll.jpeg";
import img_cutlet from "./assets/vegcutlet.jpeg";
import img_pasta from "./assets/pasta.png";
import img_biryani from "./assets/biryani.jpeg";
import img_palakpaneer from "./assets/palakpaneer.webp";
const Menu = [
  // 🍳 Breakfast
  { id: 1, image: img1, name: "Burger", category: "breakfast", price: 39, description: "A delicious best breakfast burger with fresh lettuce, tomato, and cheese." },
  { id: 2, image: sandwich, name: "Sandwich", category: "breakfast", price: 59, description: "Grilled cheese sandwich with butter and herbs." },
  { id: 3, image: img_pancakes, name: "Pancakes", category: "breakfast", price: 79, description: "Fluffy pancakes topped with syrup and butter." },
  { id: 4, image: img_omelette, name: "Omelette", category: "breakfast", price: 49, description: "Cheese omelette with herbs and veggies." },
  { id: 5, image: img_idli, name: "Idli Sambar", category: "breakfast", price: 69, description: "Soft idlis served with hot sambar and chutney." },
  { id: 6, image: img_dosa, name: "Masala Dosa", category: "breakfast", price: 89, description: "Crispy dosa filled with spiced potato masala." },
  { id: 7, image: img_poha, name: "Poha", category: "breakfast", price: 39, description: "Light and healthy flattened rice with veggies." },
  { id: 8, image: img_upma, name: "Upma", category: "breakfast", price: 45, description: "Semolina cooked with veggies and spices." },

  // Lunch
  { id: 9, image: img_pizza, name: "Pizza", category: "lunch", price: 129, description: "Cheesy and loaded with fresh toppings, perfect for lunch." },
  { id: 10, image: img_salad, name: "Salad", category: "lunch", price: 89, description: "Fresh green salad with lettuce, cucumber, and Italian dressing." },
  { id: 11, image: img_thali, name: "Veg Thali", category: "lunch", price: 159, description: "Complete Indian thali with curry, dal, rice, roti, and dessert." },
  { id: 12, image: img_chole, name: "Chole Bhature", category: "lunch", price: 119, description: "Spicy chickpeas served with fluffy bhature." },
  { id: 13, image: img_friedrice, name: "Fried Rice", category: "lunch", price: 99, description: "Chinese-style fried rice with mixed vegetables." },
  { id: 14, image: img_manchurian, name: "Veg Manchurian", category: "lunch", price: 110, description: "Crispy veg balls in tangy Manchurian sauce." },
  { id: 15, image: img_roll, name: "Paneer Roll", category: "lunch", price: 85, description: "Stuffed paneer roll with spicy masala." },
  { id: 16, image: img_cutlet, name: "Veg Cutlet", category: "lunch", price: 70, description: "Crispy cutlets made with potatoes and spices." },

  // 🍝 Dinner
  { id: 17, image: img_pasta, name: "Pasta", category: "dinner", price: 99, description: "Creamy Alfredo pasta with garlic bread." },
  { id: 18, image: img_biryani, name: "Veg Biryani", category: "dinner", price: 149, description: "Aromatic rice with spices, served with raita." },
  { id: 19, image: img_palakpaneer, name: "Palak Paneer", category: "dinner", price: 139, description: "Spinach gravy cooked with cottage cheese." },
 { id: 20, image: "img_dal", name: "Dal Tadka", category: "dinner", price: 109, description: "Yellow dal tempered with ghee, cumin, and garlic." },
  { id: 21, image: "img_roti", name: "Butter Roti", category: "dinner", price: 15, description: "Soft wheat roti topped with butter." },
  { id: 22, image: "img_naan", name: "Garlic Naan", category: "dinner", price: 30, description: "Tandoor-baked naan flavored with garlic." },
  { id: 23, image: "img_paneerbutter", name: "Paneer Butter Masala", category: "dinner", price: 149, description: "Rich tomato gravy with soft paneer cubes." },
  { id: 24, image: "img_chapati", name: "Chapati & Curry", category: "dinner", price: 79, description: "Whole wheat chapati served with curry." },

  /*// 🍟 Snacks
  { id: 25, image: "img_fries", name: "French Fries", category: "snacks", price: 49, description: "Crispy golden fries served with ketchup." },
  { id: 26, image: "img_momos", name: "Momos", category: "snacks", price: 79, description: "Steamed dumplings filled with veggies and chutney." },
  { id: 27, image: "img_samosa", name: "Samosa", category: "snacks", price: 20, description: "Crispy pastry stuffed with spicy potatoes." },
  { id: 28, image: "img_pakoda", name: "Pakoda", category: "snacks", price: 30, description: "Onion fritters deep fried till golden." },
  { id: 29, image: "img_vada", name: "Vada Pav", category: "snacks", price: 25, description: "Mumbai’s famous vada pav with chutneys." },
  { id: 30, image: "img_cuttingchai", name: "Cutting Chai", category: "snacks", price: 15, description: "Strong Indian tea served in a small glass." },
  { id: 31, image: "img_dhokla", name: "Dhokla", category: "snacks", price: 45, description: "Soft and spongy Gujarati dhokla." },
  { id: 32, image: "img_springroll", name: "Spring Roll", category: "snacks", price: 65, description: "Crispy rolls filled with veggies." },

  // ☕ Beverages
  { id: 33, image: "img_coldcoffee", name: "Cold Coffee", category: "beverages", price: 69, description: "Refreshing cold coffee topped with ice cream." },
  { id: 34, image: "img_tea", name: "Masala Tea", category: "beverages", price: 20, description: "Hot tea brewed with milk, ginger, and spices." },
  { id: 35, image: "img_lassi", name: "Lassi", category: "beverages", price: 40, description: "Sweet curd-based drink served chilled." },
  { id: 36, image: "img_milkshake", name: "Chocolate Milkshake", category: "beverages", price: 89, description: "Thick milkshake with chocolate syrup and cream." },
  { id: 37, image: "img_soda", name: "Lemon Soda", category: "beverages", price: 30, description: "Chilled soda with lemon and mint." },
  { id: 38, image: "img_mojito", name: "Virgin Mojito", category: "beverages", price: 99, description: "Refreshing mojito with lime and mint." },
  { id: 39, image: "img_orangejuice", name: "Orange Juice", category: "beverages", price: 55, description: "Freshly squeezed orange juice." },
  { id: 40, image: "img_watermelonjuice", name: "Watermelon Juice", category: "beverages", price: 50, description: "Cool watermelon juice for summer." },

  // 🍰 Dessert
  { id: 41, image: "img_cake", name: "Chocolate Cake", category: "dessert", price: 99, description: "Moist chocolate cake topped with choco chips." },
  { id: 42, image: "img_gulabjamun", name: "Gulab Jamun", category: "dessert", price: 60, description: "Soft fried balls soaked in sugar syrup." },
  { id: 43, image: "img_rasgulla", name: "Rasgulla", category: "dessert", price: 55, description: "Spongy rasgullas soaked in syrup." },
  { id: 44, image: "img_icecream", name: "Vanilla Ice Cream", category: "dessert", price: 70, description: "Classic vanilla ice cream scoop." },
  { id: 45, image: "img_kheer", name: "Kheer", category: "dessert", price: 80, description: "Traditional Indian rice pudding with dry fruits." },
  { id: 46, image: "img_pastry", name: "Strawberry Pastry", category: "dessert", price: 90, description: "Soft sponge pastry layered with cream." },
  { id: 47, image: "img_brownie", name: "Brownie", category: "dessert", price: 85, description: "Rich chocolate brownie topped with nuts." },
  { id: 48, image: "img_cheesecake", name: "Cheesecake", category: "dessert", price: 120, description: "Creamy cheesecake with berry topping." },
  { id: 49, image: "img_custard", name: "Fruit Custard", category: "dessert", price: 65, description: "Sweet custard with seasonal fruits." },
  { id: 50, image: "img_waffle", name: "Waffle", category: "dessert", price: 110, description: "Crispy waffle served with syrup and cream." },
*/
  ];

export default Menu;
