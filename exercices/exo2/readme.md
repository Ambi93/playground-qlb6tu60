## Exercice 2

Cette fois ci, Les paroles ont correctement été ajoutés. Mais ne parlant pas anglais, il n'as pas mis les bonnes couleurs à la chanson.

Comme la fois précédente, toute modification des fichiers `index.html` et `style.css` sera ignorée. Les deux fichier sont présents à titre indicatif.

> 1. Supprimmez la classe `red`.
> 2. Mettez en italique tous les refrains.
> 3. La couleur de la classe `blue` est trop forte, trouvez un moyen de mettre une couleur blue plus douce (`#8A2BE2`, `#6495ED` par exemple).

*Conseils :*

- Utilisez l'attribut `classList`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Element/classList) d'un element afin de manipuler les classes de cet objet.
- Vous ne pouvez pas modifier le css, mais vous pouvez ajouter l'attribut `style`<sup>[[1](https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/style), [2](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/style)]</sup> en utilisant `setAttribute()`[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute).
- Il y a un moyen d'ajouter la couleur d'arrière plan à l'ensemble des `paroles`... .

@[Exercice 2]({"layout": "aside", "stubs": ["exo2/src/index.js", "exo2/read-only/index.html", "exo2/read-only/style.css"], "command": "echo \"TECHIO> open -s /project/target/exo2/src/ index-copy.html\"" })
