# Exercices de Manipulation du DOM
 

## Exercice 1

Suite à un oubli de la part du créateur de l'exercice plusieurs elements n'ont pas été ajoutés dans la page.

Il en revient à vous pour corriger les erreurs qui y sont glissés

**Note :** Vous n'avez pas accès au fichier index.html original, vous ne pouvez agir dessus qu'en javascript. Le fichier index.html affiché n'est présent qu'à titre indicatif.


> 1. Selectionnez le premier fils de l'élèment `body` et modifiez son contenu en `Rick Astley - Never Gonna Give You Up`.
> 2. Sélectionnez tous les elements possèdant la classe `couplet` et supprimer la première ligne qui est en double
>    *N'oubliez pas de supprimmer le `<br />` qui cause le retour à la ligne*
> 3. *Oh, non* Le couplet s'est dupliqué à cause de l'écho. Supprimmez les occurence en double.  
>    *N'oubliez pas de supprimmer le `<br />` qui cause le retour à la ligne*
> 4. Maintenant que toutes les erreurs ont été corrigés, supprimer l'element ayant pour id `erreur`

>*Astuces :*
>
> - Utilisez `firstElementChild` pour sélectionner le premier `Element` d'un Node.
> - Utilisez `document.getElementById("un_id")` pour récuperer un element ayant pour id `un_id`.
> - Pour sélectionner tous les elements qui possèdent une classe, utilisez `document.getElementsByClassName("nom_classe")` ou `document.querySelectorAll(".nom_classe")`.  
>   **Attention, ces fonctions retournent un tableau.**
> - Utilisez `parent.removeChild(enfant)` afin de supprimer un element `enfant` d'un element `parent`.
> - Une liste peux être parcourue de début à la fin, et de la fin jusqu'au début. Cela peux être intéressant si vous supprimez des elements de la liste en même temps

@[Exercice 1]({ "stubs": ["index.js", "index.html"], "command": "echo \"TECHIO> open -s /project/target/exo1/ index-test.html\"" })

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
