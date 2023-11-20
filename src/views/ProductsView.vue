<template>
  <div class="displayContainer">
    <ProductDisplaySingle
      :namesList="namesList"
      @handle-Click="
        (n) => {
          (indexNo = n), console.log(indexNo);
          Category1 = namesList[indexNo]?.name || 'empty';
          productsList = namesList[indexNo]?.items.split(',') || [
            'Data not found',
          ];
        }
      "
    />
    <div style="width: max-content">
      <ProductDisplayMeta :category="Category1" :products="productsList" />
    </div>
  </div>
</template>

<script setup>
import ProductDisplaySingle from "@/components/ProductDisplay.vue";
import ProductDisplayMeta from "@/components/ProductMeta.vue";
import { reactive, ref } from "vue";
const namesList = [
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
      "Laundry detergent, dish soap, dish wash liquid, paper towels, tissues, trash bags, aluminum foil, zip bags, etc",
  },
  { name: "Baby Items ", items: " Baby food, diapers, wet wipes, lotion, etc" },
  {
    name: "Pet Care ",
    items: " Pet food, kitty litter, chew toys, pet treats, pet shampoo, etc.",
  },
];

let indexNo = reactive(-1);
const Category1 = ref(namesList[indexNo]?.name || "empty");
const productsList = reactive(
  namesList[indexNo]?.items.split(",") || ["Data not found"]
);
</script>

<style scoped>
.displayContainer {
  width: 100vw;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
}
</style>