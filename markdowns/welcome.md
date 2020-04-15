# Exercices de Manipulation du DOM
 

## Exercice 1

Suite à un oubli de la part du créateur de l'exercice plusieurs éléments n'ont pas été ajoutés dans la page.

Il en revient à vous pour corriger les erreurs qui y sont glissés

**Note :** Vous n'avez pas accès au fichier `index.html` original, vous ne pouvez agir dessus qu'en javascript. Le fichier `index.html` affiché n'est présent qu'à titre indicatif.


> 1. Selectionnez le premier fils de l'élèment `body` et modifiez son contenu en `Rick Astley - Never Gonna Give You Up`.
> 2. Sélectionnez tous les éléments possèdant la classe `couplet` et supprimer la première ligne qui est en double.  
>    *N'oubliez pas de supprimer le `<br />` qui cause le retour à la ligne*
> 3. Le refrain s'est dupliqué à cause de l'écho. Supprimez les occurences en double.  
>    *N'oubliez pas de supprimer le `<br />` qui cause le retour à la ligne*
> 4. Maintenant que toutes les erreurs ont été corrigées, supprimer l'élément ayant pour id `erreur`

*Astuces :*

 - Utilisez `firstElementChild` pour sélectionner le premier `Element` d'un Node.
 - Utilisez `document.getElementById("un_id")` pour récuperer un élément ayant pour id `un_id`.
 - Pour sélectionner tous les éléments qui possèdent une classe, utilisez `document.getElementsByClassName("nom_classe")` ou `document.querySelectorAll(".nom_classe")`.  
   **Attention, ces fonctions retournent un tableau.**
 - Utilisez `parent.removeChild(enfant)` afin de supprimer un élément `enfant` d'un élément `parent`.
 - Faites attention lorsque vous modifiez les elements d'une liste lors de son parcours.

@[Exercice 1]({ "stubs": ["exo1/index.js", "exo1/index.html"], "command": "echo \"TECHIO> open -s /project/target/exo1/ index-copy.html\"" })

## Exercice 2

Changez la classe du `div` afin qu'il soit bleu.

Contenu du CSS:

```css
.red {
  background-color: red;
}

.blue {
  background-color: blue;
}
```

@[Exercice 2]({ "stubs": ["index.js", "index.html"], "command": "echo \"TECHIO> open -s /project/target/exo2/ index.html\"" })
