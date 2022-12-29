/**Écrivez un programme JavaScript qui recrée le modèle ci-dessous.
Faites ce défi deux fois : d'abord en utilisant une boucle, puis en utilisant deux boucles for imbriquées (imbriquées signifie l'une dans l'autre - consultez ce didacticiel sur les boucles imbriquées ).
Faites ce défi quotidien par vous-même, sans regarder les réponses sur Internet.*/

//a. d'abord en utilisant une boucle
console.log("utilisant une boucle \n\n")
const triangle1 = 5
for (let i = 0; i < triangle1; i++) {
    console.log('*'.repeat(i + 1)); //nous utilisons repeat pour répéter le caractère # autant de fois que nécessaire pour créer chaque ligne du triangle.
}
console.log("\n\n")
//b. deux boucles for imbriquées
console.log(" en utilisant deux boucles for imbriquées \n\n")

const triangle =6
for (let i = 0; i < triangle; i++) {
    let level = '';
    for (let j = 0; j <= i; j++) {
        level += '*';
    }
    console.log(level);
}