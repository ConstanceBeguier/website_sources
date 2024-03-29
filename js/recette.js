// Database :)
function ListLunch() {
  return {
    risotto: {
      name: "Risotto",
      nb_person: 4,
      recipe: {
        "Cube de bouillon": 1,
        Oignon: 1,
        Beurre: "15g",
        "Riz Risotto": "300g",
        "Vin blanc": "8cL",
        "Huile d'olives": "5cL",
        Parmesan: "30g",
      },
      formula: [
        "Épluchez l’oignon et coupez-le grossièrement",
        "Mettez-le dans le robot muni du couteau hachoir Ultrablade. Verrouillez le couvercle avec le bouchon et appuyez sur 'Start'",
        "Placez le mélangeur et ajoutez l’huile d’olive.",
        "Pesez le riz et le vin blanc sans les ajouter à la préparation. Verrouillez le couvercle sans le bouchon et appuyez sur 'Start'. Lorsque l'alerte sonne, ajoutez le riz. Lorsque la seconde alerte sonne, ajoutez le vin blanc",
        "Ajoutez le bouillon de volaille. Verrouillez le couvercle avec le bouchon en position petite vapeur et appuyez sur 'Start'",
        "Ajoutez le parmesan et le beurre et mélangez délicatement",
        "Rectifiez l’assaisonnement et servez sans attendre"
      ],
    },
    "poulet-moutarde": {
      name: "Poulet moutarde",
      nb_person: 4,
      recipe: {
        "Escalope de poulet": 4,
        "Crème fraîche": "5cL",
      },
      formula: [
        "Faire cuire à feu moyen les escalopes de poulet dans une poêle avec une noisette de beurre",
        "Dans un bol, mélanger la crème fraîche, la moutarde et le poivre",
        "Dans une petite casserole, faite chauffer queslques instants la sauce à feu doux",
        "Napper les escalopes de poulet de sauce",
      ],
    },
    "chili-con-carne": {
      name: "Chili con carne",
      nb_person: 6,
      recipe: {
        Oignon: 1,
        "Viande hachée": "400g",
        "Haricots rouges": "400g",
        "Tomates pelées": "400g",
        Tomate: 3,
        Maïs: "400g",
      },
      formula: [
        "Faire revenir l'oignon avec l'huile d'olive dans une marmite",
        "Ajouter la viande hachée et le piment",
        "Quand la viande est à moitié cuite y ajouter les haricots rouges, les tomates et le maïs après les avoir égoutté",
        "Laisser mijoter",
        "Ajouter du piment en poudre selon le goût",
      ],
    },
    lasagnes: {
      name: "Lasagnes",
      nb_person: 6,
      recipe: {
        Oignon: 1,
        "Viande hachée": "400g",
        "Huile d'olives": "5cL",
        "Tomates pelées": "500g",
        Farine: "50g",
        Beurre: "50g",
        Lait: "50cL",
      },
      formula: [
        "Éplucher l’oignon et l’ail",
        "Mettre les dans le robot muni du couteau hachoir Ultrablade. Mixer les en vitesse 11 pendant 10 secondes",
        "Remplacer le couteau par le mélangeur et ajouter l’huile. Lancer le programme mijoté P1 à 130°C pendant 5 minutes",
        "Ajouter la viande, les tomates et l’origan. Saler et poivrer. Lancer le programme mijoté P2 à 90°C pendant 35 minutes",
        "Réserver la sauce et laver le robot",
        "Préchauffer le four à 180°C (th. 6)",
        "Dans le robot muni du batteur, mettre la farine, le lait et la muscade. Saler et poivrer. Mixer en vitesse 7 pendant 1 minute",
        "Ajouter le beurre et lancer le robot à 90°C en vitesse 4 pendant 8 minutes",
        "Huiler un plat à gratin et verser un peu de sauce tomate",
        "Couvrir de lasagnes, ajouter de la sauce tomate, de la béchamel et du gruyère",
        "Renouveler l’opération jusqu’à épuisement, en finissant par le gruyère",
        "Enfourner pendant 25 à 30 minutes",
      ],
    },
    crepes: {
      name: "Crêpes",
      nb_person: 3,
      recipe: {
        Farine: "250g",
        Oeuf: 4,
        Lait: "25cL",
        Bière: "25cL",
      },
      formula: [
        "Un total d'environ 8 crêpes",
        "Mélanger énergiquement tout sauf la bière, vitesse 10",
        "Ajouter la bière et mélanger doucement, vitesse 4"],
    },
    "saute-porc-chorizo": {
      name: "Sauté porc chorizo",
      nb_person: 4,
      recipe: {
        "Sauté de porc": "1kg",
        Oignon: 4,
        Chorizo: 1,
        "Pulpe de tomates": "400mL",
        "Olives vertes": "100g",
      },
      formula: [
        "Emincer l'oignon et détailler le chorizo pelé en rondelles.",
        "Découper le porc en morceaux.",
        "Faire revenir porc et oignons émincés jusqu'à coloration dans l'huile.",
        "Ajouter le chorizo puis la pulpe de tomate, le basilic haché et enfin les olives.",
        "Couvrir et faire mijoter à feu doux 1 heure minimum.",
      ],
    },
    tartiflette: {
      name: "Tartiflette",
      nb_person: 4,
      recipe: {
        Patate: "1kg",
        Lardons: "250g",
        Oignon: 3,
        Reblochon: 1,
        "Vin blanc": "5cL",
        "Crème fraîche": "15cL",
      },
      formula: [
        "Préchauffer le four à 190°C",
        "Cuire les pommes de terre et les couper en rondelles",
        "Couper les oignons et les faire cuire avec les lardons",
        "Mettre la moitié des patates au fond du plat puis ajouter tout le mélange",
        "Mettre l'autre moitié des patates",
        "Enfin, vin, crème, poivre et Reblochon",
        "Enfourner 20 minutes",
      ],
    },
    "poulet-moutarde-carottes": {
      name: "Poulet carottes poireaux",
      nb_person: 4,
      recipe: {
        Poulet: "750g",
        Carotte: 9,
        Poireau: 4,
        "Vin blanc": "240mL",
        "Crème fraîche": "3cL",
      },
      formula: [
        "Faire doré le poulet dans l'huile pendant 3-5 minutes, puis le réserver",
        "Faire rissoler carottes, poireaux pendant 2 minutes à feu vif",
        "Déglacer avec le vin, puis remttre le poulet et le recouvrir de légumes",
        "Laisser migoter 20 minutes",
        "Retirer le poulet et faire réduire la sauce pendant environ 15 minutes",
        "Remettre le poulet, 2 cuillères à soupe de crème et 1 de moutarde",
      ],
    },
    "poulet-champignon-olives": {
      name: "Poulet champignons olives",
      nb_person: 2,
      recipe: {
        "Haut de cuisse": 3,
        "Pilon de poulet": 1,
        Champignons: "250g",
        Oignon: 1,
        "Vin blanc": "6cL",
        "Olives vertes": "100g",
      },
      formula: ["Saisir le poulet pendant 2 minutes à feu vif puis mettre les oignons et champignons à cuire pendant 5 minutes", "Ajouter le vin, les olives et laisser mijoter à feu doux, avec le couvercle, pendant 30 minutes"],
    },
    "poulet-ananas": {
      name: "Poulet ananas",
      nb_person: 4,
      recipe: {
        "Escalope de dinde": 4,
        Ananas: 1,
        "Gousse d'ail": 2,
        "Sauce soja": "1cL",
        Riz: "240g",
      },
      formula: [
        "Lancer la cuisson du riz",
        "Découper poulet et ananas en cube (sans le coeur)",
        "Dans un bol mélanger 6 CaS de sauce soja, 2 CaS de miel et l'ail",
        "Faire revenir le poulet à feu vif pendant 2 minutes, puis mettre de côté",
        "Faire revenir l'ananas à feu vif pendant 2 minutes, puis mettre de côté",
        "Faire revenir à feu vif la sauce jusqu’à qu'elle soit sirupeuse",
        "Incorper le poulet et l'ananas et laisser cuire un peu",
      ],
    },
    "tajine-poulet-pruneaux": {
      name: "Tajine de poulet, pommes et pruneaux",
      nb_person: 6,
      recipe: {
        "Cuisses de poulet": 4,
        Oignon: 2,
        "Gousse d'ail": 1,
        Gingembre: "5g",
        Cannel: "3g",
        Pomme: 3,
        Pruneaux: "250g",
      },
      formula: [
        "Couper le poulet en deux, puis faire doré sur les deux faces avec de l'huile.",
        "Ajouter les oignons, gingembre, canelle, ail dans la cocotte.",
        "Verser de l'eau dans la cocotte pour recouvrir à mi-hauteur.",
        "Laisser cuire 45mn à feu doux.",
        "Couper les pommes en 8 et les pruneaux.",
        "Laisser cuire 30mn à feu doux.",
      ],
    },
    "poulet-curry-ananas": {
      name: "Poulet curry ananas",
      nb_person: 4,
      recipe: {
        Poulet: "750g",
        Oignon: 2,
        "Gousse d'ail": 2,
        Ananas: 1,
        "Tomates cerises": "250g",
        "Lait de coco": "400mL",
        "Pate de curry": "3cas",
      },
      formula: [
        "Dans un wok, faire revenir 3 cuillère à soupe de pate de curry avec un peu d'huile à feu moyen-fort",
        "1-2 minutes après, ajouter les oignons et l'ail",
        "1-2 minutes après, ajouter le poulet coupé en petits morceaux",
        "Une fois que le poulet est cuit, mettre sur feu doux et ajouter le lait de coco, les tomates cerises coupées en deux et l'ananas coupé en morceaux",
        "Laisser cuir pendant 1h à feux doux",
      ],
    },
    "carbonnade-flamande": {
      name: "Carbonade à la flamande de Christine",
      nb_person: 4,
      recipe: {
        "Beuf (Paleron)": "800g",
        Oignon: 3,
        Beurre: "50g",
        Bière: "40cL",
        Bouillon: "60cL",
        Farine: "30g",
      },
      formula: [
        "Couper la viande en petits morceaux de 50g en moyenne.",
        "Saler, poivrer.",
        "Chauffer 3 cuillères de graisse (d'oie de préférence).",
        "Faire rissoler la viande avec cette graisse et la retirer.",
        "Faire légèrement cuire dans cette graisse les oignons et les enlever.",
        "Dans la graisse qui reste, ajouter la farine à feu doux.",
        "Ajouter bière et bouillon, une pincée de sel, poivre et cuillère à café de sucre et une cuillère à soupe de vinaigre.",
        "Augmenter la température jusqu'à ébullition et laisser mijoter 15mn.",
        "Dans un plat en fonte, avec couvercle, disposer par couches superposées la viande et les oignons jusqu'à mi-hauteur.",
        "Mettre le bouquet garni et finir de remplir en couche.",
        "Ajouter la sauce et fermer hermétiquement la marmite avec une pâte molette (faite de farine et d'eau).",
        "Cuire 1h30 à 200°C, mettre l'exédent de sauce et refermer hérmetiquement.",
        "Faire cuire une nouvelle fois 1h30 à 200°C.",
      ],
    },
    "mont-dor": {
      name: "Mont d'Or",
      nb_person: 2,
      recipe: {
        "Mont d'Or": 1,
        "Gousse d'ail": 3,
        Patate: 3,
      },
      formula: [
        "Préchauffer le four à 220°C.",
        "Eplucher et couper les pommes de terre, puis les mettre à cuire à la vapeur 30 minutes.",
        "Couper le dessus du fromage et retirer une partie de la croûte pour faire une ouverture.",
        "Piquer les petites gousses d'ail dans le fromage et y verser 5 cL de vin blanc.",
        "Mettre la boite du fromage dans un plat à four.",
        "Baisser le four à 180°C et enfourner le plat pendant 30 minutes pour faire dorer le dessus.",
      ],
    },
    "roti-de-porc": {
      name: "Rôti de porc",
      nb_person: 4,
      recipe: {
        "Rôti de porc": 1,
        Echalotte: 4,
      },
      formula: [
        "Préchauffer le four à 200°C.",
        "Badigeonner le rôti de moutarde dessus-dessous.",
        "Le saler, saupoudrer d'herbes de provence.",
        "Couper l'échalote en morceaux et les disposer dans le fond du plat allant au four.",
        "Déposer le rôti, mettre 1 verre d'eau ou de vin blanc.",
        "Faire cuire au four (1 h par kilogramme).",
      ],
    },
  };
}
function ListDinner() {
  return {
    "pate-carbo": {
      name: "Pâtes à la Carbonara",
      nb_person: 2,
      recipe: {
        "Crème fraîche": "20cL",
        Oeuf: 2,
        Lardons: "125g",
        Oignon: 1,
        Pâtes: "250g",
      },
      formula: ["todo"],
    },
    "pate-pizza": {
      name: "Pâte à pizza",
      nb_person: 4,
      recipe: {
        Eau: "360mL",
        Huile: "1.5cs",
        Sel: "1.5cc",
        Farine: "480g",
        Levure: "1.5cc",
      },
      formula: ["Machine à pain, programme 13.", "Four à 200°C, pendant 15-20 minutes"],
    },
    "pate-brisee": {
      name: "Pâte brisée",
      nb_person: 4,
      recipe: {
        Farine: "300g",
        Beurre: "150g",
        Eau: "8cL",
      },
      formula: [
        "Mélanger la farine avec une pincée de sel.",
        "Ajouter le beurre et mélanger.",
        "Ajouter l'eau et mélanger.",
        "Four à 200°C, pendant 35 minutes."
      ],
    },
    pizza: {
      name: "Pizza",
      nb_person: 4,
      recipe: {
        "Pâte à pizza": 1,
        "Sauce tomate": 0.5,
        Champignons: "100g",
        Jambon: 2,
        Gruyère: "50g",
      },
      formula: ["Four à 200°C, pendant 15 minutes"],
    },
    "tarte-tomate": {
      name: "Tarte à la tomate",
      nb_person: 4,
      recipe: {
        "Pâte brisée": 1,
        Tomate: 6,
        Gruyère: "50g",
      },
      formula: ["Four à 200°C, pendant 35 minutes"],
    },
    quiche: {
      name: "Quiche",
      nb_person: 4,
      recipe: {
        "Pâte brisée": 1,
        Oeuf: 3,
        Lardons: "200g",
        "Crème fraîche": "20cL",
        Lait: "20cL",
        Oignon: 1,
      },
      formula: [
        "Couper l'oignon en petit morceaux et faire cuire à la poêle avec les lardons.",
        "Pendant cette cuisson, allumer le four à 200°C et mettre dans un saladier lait, oeufs et crème fraîche.",
        "Dans le plat à tarte, mettre la pâte, les lardons et verser dessus la préparation du saladier.",
        "Mettre du fromage râpé au dessus.",
        "Faire cuire pendant 35 minutes.",
      ],
    },
    "tarte-poireaux": {
      name: "Tarte aux poireaux",
      nb_person: 4,
      recipe: {
        "Pâte brisée": 1,
        Poireaux: 3,
        Gruyère: "50g",
        "Crème fraîche": "5cL",
        Oeuf: 1,
      },
      formula: ["todo"],
    },
    "tarte-flambee": {
      name: "Tarte flambée",
      nb_person: 4,
      recipe: {
        Farine: "250g",
        "Huile d'olives": "5cL",
        Oignon: 2,
        Lardons: "200g",
        "Fromage blanc": "100g",
        "Crème fraîche": "10cL",
        Gruyère: "50g",
      },
      formula: [
        "Préparer la pâte à l'aide d'un robot ou à la main. Mélanger la farine, ½ c. à café de sel, l'huile et progressivement 15 cl d'eau tiède",
        "Travailler quelques minutes pour obtenir une pâte bien élastique, puis laisser reposer 1 heure à couvert",
        "Préchauffer votre four à 280°C. Émincer les oignons en fines lanières et faites-les fondre à feu doux pendant 5 min dans une noix de beurre, sans les colorer",
        "Faire rissoler rapidement les lardons",
        "Mélanger le fromage blanc et la crème, assaisonner de sel, de poivre et de noix muscade",
        "Etaler la pate, ajouter le mélange de fromage blanc, ajouter la garniture et du gruyère rapé (et du munster)",
        "Cuire 15 minutes au four",
      ],
    },
    "cake-jambon-olive": {
      name: "Cake Jambon Olive",
      nb_person: 4,
      recipe: {
        Farine: "150g",
        Jambon: "200g",
        "Olives vertes": "150g",
        Gruyère: "75g",
        Oeuf: 4,
        Lait: "10cL",
        "Levure chimique": 1,
      },
      formula: ["todo"],
    },
    "cake-menthe-feta": {
      name: "Cake Concombre Menthe Féta",
      nb_person: 4,
      recipe: {
        Farine: "150g",
        "Menthe fraîche": 1,
        Féta: "200gg",
        Oeuf: 4,
        "Huile d'olives": "10cL",
        "Crème fraîche": "15cL",
        "Levure chimique": 1,
        Concombre: 1,
      },
      formula: [
        "Retirer les grains du concombre, le découper en cubes et laisser dégorger dans une passoire avec un peu de sel pendant 30 minutes",
        "Mélanger les oeufs, la farine et la levure",
        "Y ajouter la crème, l'huile puis la menthe",
        "Préchauffer le four à 180°C et laisser reposer la pâte 30 minutes au frigo",
        "Couper la féta en cubes, puis étaler les concombre sur du papier absorbant",
        "Mélanger la pâte, les concombres et la féta",
        "Faire cuire 45 minutes au four dans un moule à cake",
      ],
    },
    "soupe-corail-coco": {
      name: "Soupe corail curry coco",
      nb_person: 4,
      recipe: {
        Oignon: 1,
        "Gousse d'ail": 2,
        Gingembre: "30g",
        "Lentilles corail": "150g",
        "Pulpe de tomates": "400mL",
        "Lait de coco": "400mL",
      },
      formula: [
        "Faire cuire les oignons dans une sauteuse avec un peu d'huile",
        "Quand ils sont cuit ajouter une cuillère à soupe de curry et 1/4 de cuillère à café de piment",
        "Ajouter gingembre et 2 gousses d'ail",
        "Après 2 minutes, verser les lentilles, puis ajouter la pulpe de tomates et 600mL d'eau",
        "Verser le lait de coco dans la sauteuse",
        "Porter à ébullition puis passer à feu moyen et laisser migoter 25 minutes",
      ],
    },
    quenelles: {
      name: "Quenelles",
      nb_person: 3,
      recipe: {
        Quenelle: 4,
        Farine: "40g",
        Beurre: "40g",
        Lait: "40cL",
      },
      formula: [
        "Dans le robot muni du batteur, mettre la farine, le lait et la muscade. Saler et poivrer. Mixer en vitesse 7 pendant 1 minute",
        "Ajouter le beurre et lancer le robot à 90°C en vitesse 4 pendant 8 minutes",
        "Verser sur les quenelles dans un plat et faire cuire au four",
      ],
    },
    "gratin-courgettes": {
      name: "Gratin de courgettes",
      nb_person: 4,
      recipe: {
        Courgette: 2,
        Raviolles: 1,
        "Crème fraîche": "20cL",
        Parmesan: "50g",
      },
      formula: [
        "Préchauffer le four à 180°C",
        "Couper les courgettes en rondelles",
        "Mettre la moitié des courgettes dans le plat",
        "Mettre la moitié des raviolles",
        "Ajouter un peu de crème et de parmesan",
        "Deuxième couche et enfourner 30 minutes",
      ],
    },
    "soupe-courge-coco": {
      name: "Soupe courge coco",
      nb_person: 4,
      recipe: {
        Courge: "500g",
        Coco: "20cL",
        "Cube de bouillon": 1,
      },
      formula: ["Tout faire cuire et mixer"],
    },
    "soupe-brocoli": {
      name: "Soupe brocoli",
      nb_person: 4,
      recipe: {
        Brocoli: 1,
        Oignon: 1,
        Patate: "100g",
        "Cube de bouillon": 1,
      },
      formula: ["Tout faire cuire et mixer"],
    },
    "tartine-jambon-mozzarella": {
      name: "Tartine jambon Mozzarella",
      nb_person: 4,
      recipe: {
        Tomate: 2,
        Mozzarella: 1,
        "Gousse d'ail": 2,
        "Grande tranches de pain": 4,
        "Jambon de parme": 4,
      },
      formula: [
        "Couper les tomates en petits cubes",
        "Couper la Mozzarella en tranches",
        "Peler les gousses d'ail",
        "Allumer le grill du four",
        "Toaster légerment les tranches de pain et les frotter aux gousses d'ail",
        "Recouvrir la tartine de tomate, jambon, Mozzarella puis arroser d'huile d'olives",
        "Mettre au grill jusqu'à ce que la Mozzarella fonde",
      ],
    },
    "tarte-oignon": {
      name: "Tarte à l'oignon",
      nb_person: 6,
      recipe: {
        "Pâte brisée": 1,
        Oignon: 4,
        Oeuf: 2,
        "Crème fraîche": "22cL",
      },
      formula: [
        "Chauffer le four à 180°C.",
        "Faire fondre les oignons 20mn à feu doux en remuant.",
        "Saler, poiver, muscader.",
        "Dans un bol, mélanger les oeufs, crème, sel, poivre.",
        "Dans un plat, mettre la pâte, les oignons, puis la préparation.",
        "Cuire 30-35mn.",
      ],
    },
    "muffin-chevre-pomme": {
      name: "Muffins chèvre pomme",
      nb_person: 4,
      recipe: {
        Farine: "120g",
        "Levure chimique": 1,
        Yaourt: 2,
        Chevre: "100g",
        "Pomme (granny)": 2,
      },
      formula: [
        "Préchauffer le four à 180°C.",
        "Mélanger les oeufs et les yaourts.",
        "Ajouter la farine et la levure.",
        "Ajouter le chèvre et les pommes en petits morceaux.",
        "Mettre dans les moules à muffin et faire cuire au four pendant 15/20min.",
      ],
    },
    "verrine-carotte": {
      name: "Verrines carottes",
      nb_person: 4,
      recipe: {
        Carotte: "500g",
        "Cube de bouillon": 1,
        "Vache qui rit": 2,
      },
      formula: ["Cuire les carottes.", "Mixer les carottes avec le bouillon.", "Ajouter la vache qui rit.", "Mettre au frais."],
    },
  };
}
function ListDessert() {
  return {
    cake_aux_raisins: {
      name: "Cake aux raisins Lanvin",
      nb_person: 4,
      recipe: {
        Beurre: "125g",
        Sucre: "125g",
        Oeuf: 3,
        Farine: "160g",
        "Levure chimique": 0.5,
        Raisin: "150g",
        Rhum: "10cL",
      },
      formula: [
        "Laisser imbiber le raisin dans le rhum.",
        "Faire fondre le beurre et le mélanger avec le sucre.",
        "Ajouter un oeuf, battre 3 minutes, x3.",
        "Ajouter farine et une cuillère et demi à café de levure.",
        "Ajouter les fruits. Mettre dans un moule à cake.",
        "10 minutes à 215°C, puis baisser à 160°C pendant 25 minutes.",
      ],
    },
    cake_banane_chocolat: {
      name: "Cake banane chocolat",
      nb_person: 4,
      recipe: {
        Farine: "150g",
        Oeuf: 4,
        Lait: "10cL",
        "Levure chimique": 1,
        "Pépites de chocolat": "100g",
        Banane: 3,
      },
      formula: ["Préchauffer le four à 180°C.", "Mélanger la farine, la levure et les oeufs.", "Ajouter le lait.", "Ajouter les pépites de chocolat.", "Ajouter les bananes écrasées.", "Cuire 45 minutes."],
    },
    cookies: {
      name: "Cookies",
      nb_person: 4,
      recipe: {
        Farine: "380g",
        "Levure chimique": 1,
        Oeuf: 2,
        Cassonade: "130g",
        Sucre: "130g",
        Beurre: "170g",
        "Pépites de chocolat": "200g",
      },
      formula: ["Préchauffer le four à 200°C.", "Mélanger la farine, la levure et les oeufs.", "Ajouter le sucre et la cassonade.", "Ajouter le beurre et bien mélanger à la main.", "Ajouter les pépites de chocolat.", "Cuire 5-7 minutes.", "Pour les cookies congelés, 10 minutes à 210°C."],
    },
    confiture_banane_kiwi: {
      name: "Confiture banane kiwi",
      nb_person: 2,
      recipe: {
        "Sucre confiture": "150g",
        Pruneaux: 5,
        Pomme: 1,
        Banane: 2,
        Kiwi: 3,
      },
      formula: ["Couper les fruits en petits morceaux et les mettre dans un saladier avec le sucre.", "Bien mélanger et laisser massérer au frigo pendant 10h-12h.", "Mixer les fruits.", "Cuire dans une sauteuse à feu vif en remuant souvent pendant 10-15min.", "Mettre dans les pots, bien fermer et les retourner."],
    },
    crumble: {
      name: "Crumble",
      nb_person: 4,
      recipe: {
        Farine: "150g",
        Beurre: "75g",
        Sucre: "150g",
        Pomme: 5,
      },
      formula: ["Préchauffer le four à 180°C.", "Couper les pommes et les mettre au fond du plat.", "Mélanger à la main le beurre, la farine et le sucre.", "Saupoudrer la pate sur les pommes.", "Cuire 30 minutes."],
    },
    gateau_pommes: {
      name: "Gateau aux pommes",
      nb_person: 6,
      recipe: {
        Beurre: "125g",
        Sucre: "125g",
        Oeuf: 3,
        Farine: "200g",
        "Levure chimique": 1,
        Pomme: 5,
      },
      formula: [
        "Préchauffer le four à 200°C.",
        "Mélanger le beurre mou et le sucre.",
        "Ajouter les oeufs, la farine et la levure.",
        "Ajouter un peu de lait (1 à 3 cuillères).",
        "Ajouter les pommes coupées en morceaux.",
        "Verser dans un moule.",
        "Cuire 45-60 minutes.",
      ],
    },
    gateau_chocolat: {
      name: "Gateau au chocolat",
      nb_person: 6,
      recipe: {
        Oeuf: 3,
        Sucre: "200g",
        Chocolat: "100g",
        Beurre: "50g",
        Farine: "50g",
        Fécule: "50g",
      },
      formula: [
        "Préchauffer le four à 180°C.",
        "Mélanger les oeufs et le sucre.",
        "Ajouter la farine et la fécule.",
        "Faire fondre le chocolat avec le beurre.",
        "Ajouter le chocolat et le beurre.",
        "Verser dans un plat.",
        "Cuire 20 minutes.",
      ],
    },
    gateau_chocolat_supreme: {
      name: "Gateau au chocolat avec suprême",
      nb_person: 6,
      recipe: {
        Oeuf: 6,
        Sucre: "230g",
        Beurre: "180g",
        Farine: "180g",
        "Levure chimique": 1,
        "Chocolat en poudre": "3cas",
        Chocolat: "250g",
      },
      formula: [
        "Préchauffer le four à 180°C.",
        "Mélanger beurre fondu (180g) et le sucre.",
        "Ajouter le chocolat en poudre.",
        "Ajouter la farine et la levure.",
        "Ajouter 6 blancs en neige très fermes.",
        "Cuire 30-35 minutes.",
        "Faire fondre le chocolat avec un peu de lait.",
        "Mélanger les 6 jaunes d'oeuf avec 50g de sucre.",
        "Ajouter ce mélange au chocolat fondu.",
        "Ajouter 50g de beurre fondu.",
        "Cuire à feux doux dans une casserole.",
        "Couper le gateau en deux.",
        "Garnir et recouvrir le gateau de suprême.",
      ],
    },
    muffin_banane_chocolat: {
      name: "Muffins banane chocolat",
      nb_person: 4,
      recipe: {
        Farine: "135g",
        "Levure chimique": 1,
        Oeuf: 1,
        Sucre: "150g",
        Beurre: "40g",
        Banane: 2,
        "Pépites de chocolat": "200g",
      },
      formula: [
        "Préchauffer le four à 200°C.",
        "Mélanger les oeufs et le sucre.",
        "Ajouter la farine et la levure.",
        "Ajouter le beurre fondu.",
        "Ajouter les bananes écrasées.",
        "Ajouter un peu de lait.",
        "Ajouter les pépites de chocolat.",
        "Verser dans des moules à muffin.",
        "Cuire 15 minutes.",
      ],
    },
    cornes_de_gazelle: {
      name: "Cornes de Gazelle de Cathy",
      nb_person: 8,
      recipe: {
        "Pâte brisée": 4,
        "Poudre d'amande": "400g",
        Sucre: "400g",
        "Blanc d'oeuf": 2,
        "Sucre glace": "10g",
        "Fleur d'oranger": "5g",
      },
      formula: [
        "Mélanger amandes et sucre avec blanc d'oeufs et fleur d'oranger.",
        "Etaler la pâte, faire des ronds et les farcir avec le mélange.",
        "Faire cuire au four 180°C pendant 20mn.",
        "Mettre les cornes de gazelle dans une poche avec du sucre glace et secouer.",
      ],
    },
    galette_frangipane: {
      name: "Galette Frangipane de Christine",
      nb_person: 6,
      recipe: {
        "Pâte brisée": 1,
        "Poudre d'amande": "125g",
        Sucre: "125g",
        Beurre: "125g",
        Oeuf: 2,
        "Jaune d'oeuf": 1,
      },
      formula: [
        "Préchaffer le four à 215°C.",
        "Mélanger beurre mou, sucre. Ajouter poudre d'amande et les deux oeufs.",
        "Etaler la pâte pour la rendre moins épaisse.",
        "Garnir la pâte et recouvrir.",
        "Dorer au jaune d'oeuf et faire un trou.",
        "Faire cuire 20mn.",
      ],
    },
  };
}
