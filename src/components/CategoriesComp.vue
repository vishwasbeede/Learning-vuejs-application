<script setup>
import { ref } from 'vue';

const namesList = ref([
  {
    name: "Fruits  ",
    items:
      " Apples, bananas,  grapes, oranges, strawberries, avocados, peaches, etc",
  },
  {
    name: "Vegetables  ",
    items:
      " Potatoes, onions, carrots, salad greens, broccoli, peppers, tomatoes, cucumbers, etc",
  },
  {
    name: "Canned Goods  ",
    items: " Soup, tuna, fruit, beans, vegetables, pasta sauce, etc",
  },
  { name: "Dairy  ", items: " Butter, cheese, eggs, milk, yogurt, etc" },
  { name: "Meat ", items: " Chicken, beef, pork, sausage, bacon etc" },
  { name: "Fish & Seafood ", items: " Shrimp, crab, cod, tuna, salmon, etc" },
  { name: "Deli ", items: " Cheese, salami, ham, turkey, etc" },
  {
    name: "Condiments & Spices ",
    items:
      " Black pepper, oregano, cinnamon, sugar, olive oil, ketchup, mayonnaise, etc",
  },
  { name: "Snacks ", items: " Chips, pretzels, popcorn, crackers, nuts, etc" },
  {
    name: "Bread & Bakery ",
    items: " Bread, tortillas, pies, muffins, bagels, cookies, etc",
  },
  {
    name: "Beverages ",
    items: " Coffee, teabags, milk, juice, soda, beer, wine, etc",
  },
  {
    name: "Pasta, Rice & Cereal ",
    items: "Oats, granola, brown rice, white rice, macaroni, noodles, etc",
  },
  {
    name: "Baking ",
    items: " Flour, powdered sugar, baking powder, cocoa etc",
  },
  {
    name: "Frozen Foods  ",
    items: " Pizza, fish, potatoes, ready meals, ice cream, etc",
  },
  {
    name: "Personal Care ",
    items: " Shampoo, conditioner, deodorant, toothpaste, dental floss, etc",
  },
  {
    name: "Health Care ",
    items: " Saline, band-aid, cleaning alcohol, pain killers, antacids, etc",
  },
  {
    name: "Household & Cleaning Supplies ",
    items:
      "Laundry detergent, dish soap, dishwashing liquid, paper towels, tissues, trash bags, aluminum foil, zip bags, etc",
  },
  { name: "Baby Items ", items: " Baby food, diapers, wet wipes, lotion, etc" },
  {
    name: "Pet Care ",
    items: " Pet food, kitty litter, chew toys, pet treats, pet shampoo, etc.",
  },
]);
function handleClick(inp) {
  const obj1 = namesList.value.find((item1 => item1.name.trimEnd() === inp.target.innerText))
  alert("Button clicked!," + JSON.stringify(obj1.items));
}
</script>
<style scoped>
li {
  list-style: none;
  font-size: larger;
  font-family: cursive;
}
@media (max-width: 600px) {
  ul {
    display: list-item;
    columns: 1;
  }
  li {
    font-size: small;
    flex-wrap: wrap;
  }
}
</style>
  
<template>
  <div class="categories">
    <ul>
      <li
        v-for="item in namesList"
        v-bind:key="item.name"
        v-on:click.prevent="handleClick($event)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>