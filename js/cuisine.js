function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function GenerateHTMLDropdownElement(e_type, e_className, e_key, e_textContent) {
  var element = document.createElement(e_type);
  element.className = e_className;
  element.id = e_key;
  element.setAttribute("onclick", "LunchDropDownUpdate(this)");
  if (e_textContent) {
    element.textContent = e_textContent;
  }
  return element.outerHTML;
}
function GenerateHTMLCollapseElement(meals, key) {
  var drop = document.createElement("div");
  drop.className = "col-1 p-0 text-end";
  drop.innerHTML = '<ion-icon name="trash-outline" class="drop-one" id=' + key + ' onclick="DropOne(this)"></ion-icon> ';
  var textArea = document.createElement("div");
  textArea.className = "col-11";
  textArea.setAttribute("data-bs-toggle", "collapse");
  textArea.setAttribute("href", "#collapse" + key);
  textArea.setAttribute("role", "button");
  textArea.setAttribute("aria-expanded", "false");
  textArea.setAttribute("aria-controls", "collapse" + key);
  textArea.innerHTML = "<b>" + meals[key]["name"] + "</b>  x" + basketCRUD.get(key);
  var collapse = document.createElement("div");
  collapse.className = "collapse";
  collapse.id = "collapse" + key;
  var full_formula = "";
  for (var i in meals[key]["formula"]) {
    index = parseInt(i) + 1;
    full_formula += index + ". " + meals[key]["formula"][i] + "<br><br>";
  }
  var recipe = '<p class="m-0">';
  recipe += "Nombre de personnes: " + meals[key]["nb_person"] + "<br><br>";
  for (var ingredient in meals[key]["recipe"]) {
    recipe += "<b>" + ingredient + "</b> " + meals[key]["recipe"][ingredient] + ", ";
  }
  recipe += "</p>";
  collapse.innerHTML = GenerateHTMLElement("div", "card card-body formula-ingredient", "", recipe) + GenerateHTMLElement("div", "card card-body formula", "", full_formula);
  return GenerateHTMLElement("div", "row", "", drop.outerHTML + textArea.outerHTML + collapse.outerHTML);
}
function GenerateHTMLElement(e_type, e_className, e_textContent, e_innerHTML) {
  var element = document.createElement(e_type);
  element.className = e_className;
  if (e_textContent) {
    element.textContent = e_textContent;
  }
  if (e_innerHTML) {
    element.innerHTML = e_innerHTML;
  }
  return element.outerHTML;
}
function DrawMeal(text, key) {
  return GenerateHTMLDropdownElement("a", "dropdown-item", key, text["name"] + " - (" + text["nb_person"] + ")");
}
function drawDropDownLunch() {
  var lunchs = ListLunch();
  var dropdownHTML = "";
  for (var key in lunchs) {
    dropdownHTML += DrawMeal(lunchs[key], key);
  }
  document.getElementById("lunch").innerHTML = dropdownHTML;
}
function drawDropDownDinner() {
  var lunchs = ListDinner();
  var dropdownHTML = "";
  for (var key in lunchs) {
    dropdownHTML += DrawMeal(lunchs[key], key);
  }
  document.getElementById("dinner").innerHTML = dropdownHTML;
}
function drawDropDownDessert() {
  var lunchs = ListDessert();
  var dropdownHTML = "";
  for (var key in lunchs) {
    dropdownHTML += DrawMeal(lunchs[key], key);
  }
  document.getElementById("dessert").innerHTML = dropdownHTML;
}
function drawListing() {
  var lunchs = ListLunch();
  var dinners = ListDinner();
  var desserts = ListDessert();
  var meals = Object.assign(lunchs, dinners, desserts);
  var ListHTML = "";
  for (var key in basketCRUD.getAll()) {
    ListHTML += GenerateHTMLCollapseElement(meals, key);
  }
  document.getElementById("listing").innerHTML = ListHTML;
}
function drawRecipe() {
  var full_recipe = GetFullRecipe();
  var sortedIngredients = SortIngredients(full_recipe);
  var RecipeHTML = "";
  for (var i in sortedIngredients) {
    var ingredient = sortedIngredients[i];
    if (full_recipe[ingredient]["unit"] != null) {
      full_recipe[ingredient]["value"] += full_recipe[ingredient]["unit"];
    }
    var checkbox = document.createElement("input");
    checkbox.className = "form-check-input";
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "flexRadioDefault");
    checkbox.setAttribute("id", "flexRadio" + ingredient);
    RecipeHTML += GenerateHTMLElement("div", "form-check", "", checkbox.outerHTML + '<label class="form-check-label" for="flexRadio' + htmlEntities(ingredient) + '"><b>' + htmlEntities(ingredient) + "</b> " + htmlEntities(full_recipe[ingredient]["value"]) + "</label>");
  }
  document.getElementById("recipe").innerHTML = RecipeHTML;
}

function drawShopping() {
  if (window.localStorage.getItem("shopping") == null || window.localStorage.getItem("shopping") == "{}") {
    shoppingCRUD.create();
    var full_recipe = GetFullRecipe();
    var sortedIngredients = SortIngredients(full_recipe);
    for (var i in sortedIngredients) {
      var ingredient = sortedIngredients[i];
      if (full_recipe[ingredient]["unit"] != null) {
        full_recipe[ingredient]["value"] += full_recipe[ingredient]["unit"];
      }
      shoppingCRUD.add(ingredient, full_recipe[ingredient]["value"]);
    }
  }
  var RecipeHTML = "";
  for (var ingredient in shoppingCRUD.getAll()) {
    if (!ingredient.endsWith("_checked")) {
      var checkbox = document.createElement("input");
      checkbox.className = "form-check-input";
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("name", "flexRadioDefault");
      if (shoppingCRUD.get(ingredient + "_checked")) {
        checkbox.setAttribute("checked", true);
      }
      checkbox.setAttribute("id", "flexRadio" + ingredient);
      checkbox.setAttribute("onchange", 'shoppingCRUD.switch("' + htmlEntities(ingredient) + '")');
      RecipeHTML += GenerateHTMLElement("div", "form-check", "", checkbox.outerHTML + '<label class="form-check-label" for="flexRadio' + htmlEntities(ingredient) + '"><b>' + htmlEntities(ingredient) + "</b> " + htmlEntities(shoppingCRUD.get(ingredient)) + "</label>");
    }
  }
  document.getElementById("shopping").innerHTML = RecipeHTML;
}
function EventSwitchRecipe() {
  window.localStorage.setItem("view", "recipe");
  DrawBody();
}
function EventSwitchShopping() {
  window.localStorage.setItem("view", "shopping");
  DrawBody();
}
function EventAddIngredient() {
  shoppingCRUD.add(document.getElementById("inputAdd").value, "");
  document.getElementById("inputAdd").value = "";
  DrawBody();
}
function EventKeyAddIngredient() {
  document.getElementById("inputAdd").onkeydown = function (e) {
    if (e.keyCode == 13) {
      EventAddIngredient();
    }
  };
}
function EventDeleteSelectedIngredient() {
  for (var ingredient in shoppingCRUD.getAll()) {
    if (!ingredient.endsWith("_checked")) {
      if (shoppingCRUD.get(ingredient+"_checked")) {
        shoppingCRUD.delete(ingredient);
      }
    }
  }
  DrawBody();
}
function EventShareShopping() {
  code = window.location.href.split("?")[0] + "?shopping=" + btoa(window.localStorage.getItem("shopping"));
  document.getElementById("sharedCode").innerHTML = "<a href="+code+">"+code+"</a>";
  navigator.clipboard.writeText(code);
  document.getElementById("pasted").hidden = false;
}
function DrawBody() {
  const urlParams = new URLSearchParams(location.search);
  if (urlParams.has("shopping")) {
    window.localStorage.setItem("view", "shopping");
    window.localStorage.setItem("shopping", atob(urlParams.get("shopping")));
    window.location = window.location.href.split("?")[0];
  }
  if (window.localStorage.getItem("view") == null || window.localStorage.getItem("view") == "recipe") {
    document.getElementById("btnrecette").checked = true;
    document.getElementById("btncourse").checked = false;
    document.getElementById("dropdownMenuButton-lunch").hidden = false;
    document.getElementById("dropdownMenuButton-dinner").hidden = false;
    document.getElementById("dropdownMenuButton-dessert").hidden = false;
    document.getElementById("bodyRecipe").hidden = false;
    document.getElementById("bodyShopping").hidden = true;
    drawDropDownLunch();
    drawDropDownDinner();
    drawDropDownDessert();
    drawListing();
    drawRecipe();
  } else {
    document.getElementById("btnrecette").checked = false;
    document.getElementById("btncourse").checked = true;
    document.getElementById("dropdownMenuButton-lunch").hidden = true;
    document.getElementById("dropdownMenuButton-dinner").hidden = true;
    document.getElementById("dropdownMenuButton-dessert").hidden = true;
    document.getElementById("bodyRecipe").hidden = true;
    document.getElementById("bodyShopping").hidden = false;
    drawShopping();
    document.getElementById("inputAdd").focus()
  }
}
function LunchDropDownUpdate(origin) {
  basketCRUD.increment(origin.id);
  drawListing();
  drawRecipe();
}
function Dropall() {
  basketCRUD.deleteAll();
  shoppingCRUD.deleteAll();
  document.getElementById("inputAdd").value = "";
  DrawBody();
}
function DropOne(origin) {
  basketCRUD.delete(origin.id);
  drawListing();
  drawRecipe();
}
var basketCRUD = {
  create: function () {
    localStorage.setItem("basket", "{}");
    return true;
  },
  deleteAll: function () {
    localStorage.removeItem("basket");
    return true;
  },
  getAll: function () {
    if (localStorage.getItem("basket") == null) {
      this.create();
    }
    return JSON.parse(localStorage.getItem("basket"));
  },
  get: function (key) {
    return this.getAll()[key];
  },
  delete: function (key) {
    var lunch = this.getAll();
    delete lunch[key];
    localStorage.setItem("basket", JSON.stringify(lunch));
    return true;
  },
  update: function (key, value) {
    var lunch = this.getAll();
    lunch[key] = value;
    localStorage.setItem("basket", JSON.stringify(lunch));
    return true;
  },
  increment: function (key) {
    var lunch = this.get(key);
    if (lunch == null) {
      lunch = 0;
    }
    this.update(key, lunch + 1);
    return true;
  },
};
var shoppingCRUD = {
  create: function () {
    localStorage.setItem("shopping", "{}");
    return true;
  },
  deleteAll: function () {
    localStorage.removeItem("shopping");
    return true;
  },
  getAll: function () {
    if (localStorage.getItem("shopping") == null) {
      this.create();
    }
    return JSON.parse(localStorage.getItem("shopping"));
  },
  get: function (key) {
    return this.getAll()[key];
  },
  delete: function (key) {
    var shopping = this.getAll();
    delete shopping[key];
    localStorage.setItem("shopping", JSON.stringify(shopping));
    return true;
  },
  add: function (key, value) {
    var shopping = this.getAll();
    shopping[key] = value;
    shopping[key + "_checked"] = false;
    localStorage.setItem("shopping", JSON.stringify(shopping));
    return true;
  },
  switch: function (key) {
    var shopping = this.getAll();
    shopping[key + "_checked"] = !shopping[key + "_checked"];
    localStorage.setItem("shopping", JSON.stringify(shopping));
    return true;
  },
};
function SortIngredients(recipe) {
  list_ingredients = [];
  for (var ingredient in recipe) {
    list_ingredients.push(ingredient);
  }
  list_ingredients.sort();
  return list_ingredients;
}
function GetFullRecipe() {
  var lunchs = ListLunch();
  var dinners = ListDinner();
  var desserts = ListDessert();
  var meals = Object.assign(lunchs, dinners, desserts);
  var fullRecipe = {};
  for (var key in basketCRUD.getAll()) {
    for (var ingredient in meals[key]["recipe"]) {
      if (fullRecipe[ingredient] == null) {
        fullRecipe[ingredient] = {};
        fullRecipe[ingredient]["value"] = 0;
      }
      var recipeValue = meals[key]["recipe"][ingredient];
      if (typeof recipeValue == "string") {
        var recipeUnit = recipeValue.match("([0-9.]+)([a-zA-Z]+)")[2];
        recipeValue = parseFloat(recipeValue.match("([0-9.]+)([a-zA-Z]+)")[1]);
        if (recipeUnit.endsWith("L")) {
          fullRecipe[ingredient]["unit"] = "cL";
          if (recipeUnit == "L") {
            recipeValue = recipeValue * 100;
          } else if (recipeUnit == "mL") {
            recipeValue = recipeValue / 10;
          }
        } else if (recipeUnit.endsWith("g")) {
          fullRecipe[ingredient]["unit"] = "g";
          if (recipeUnit == "kg") {
            recipeValue = recipeValue * 1000;
          } else if (recipeUnit == "mg") {
            recipeValue = recipeValue / 1000;
          }
        }
      }
      fullRecipe[ingredient]["value"] += parseFloat(recipeValue) * parseFloat(basketCRUD.get(key));
    }
  }
  return fullRecipe;
}
