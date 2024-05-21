# Checkpoint 2 - JS

## Introduction - Que sont les checkpoints ?

Pour rappel un **checkpoint** est un terme utilisé dans la Wild Code School pour décrire une **auto-évaluation dans un temps donné**. Elle dure généralement une demi-journée (jusqu'à une journée complète ou plus).

Ces checkpoints sont conçus pour atteindre un certain nombre d’objectifs en te présentant :

> 1. ... une façon de mesurer tes progrès 📏📈
> 2. ... la possibilité d'utiliser tes compétences acquises dans un objectif qui a du sens 🚩🥅
> 3. ... la possibilité d'exercer les compétences de gestion du temps et de priorisation ⌛⬆️
> 4. ... l'opportunité de revoir et d'apprendre du code des autres, montrant qu'il existe toujours de nombreuses façons différentes d'accomplir une tâche 👥💬

## Les grandes lignes – Applicables à tous les checkpoints

Chaque checkpoint implique un ensemble d’étapes similaires :

1. Cloner le dépôt localement à l'aide des commandes git
2. Immédiatement après le clonage, créer une nouvelle branche localement et basculer dessus
3. Pour nommer ta branche, nous aimerions que tu utilises le modèle `{{firstname}}_{{LASTNAME}}` où :

- `{{firstname}}` est un placeholder qui doit être remplacé par ton prénom, en minuscules
- `{{LASTNAME}}` est un placeholder qui doit être remplacé par ton nom de famille, en majuscules

(par exemple, si ton prénom est John et ton nom Doe, le modèle `{{firstname}}_{{LASTNAME}}` donnera `john_DOE`)

4. Ouvrir le dépôt cloné dans ton IDE
5. Faire un commit après chaque étape, avec un message de commit qui met en évidence la partie terminée (par exemple `finished step 1`)
6. Pousser tes modifications vers GitHub, de préférence après chaque validation

## Pour ce checkpoint en particulier

Ton objectif est de voir où tu en es sur :

- [ ] L'utilisation de fetch
- [ ] L'utilisation des props
- [ ] L'utilisation des states
- [ ] L'utilisation de `map` et `filter`
- [ ] Les loaders dans React Router
- [ ] Le hook `useEffect`
- [ ] La création de composants React
- [ ] La création de routes avec React Router

Copie le fichier `.env.sample` du dossier `server` et renomme ta copie `.env`.

Lance ensuite les commandes suivantes :

```bash
npm install
npm run dev
```

Et ouvre l'adresse http://localhost:3000/

fetch('http://localhost:3310/api/cupcakes')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching cupcakes:', error));
Promise {<pending>}
[[Prototype]]
: 
Promise
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
undefined
VM28:3 
(27) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0
: 
{id: 1, accessory_id: '3', accessory: 'chocolate', color1: 'red', color2: 'white', …}
1
: 
{id: 2, accessory_id: '3', accessory: 'chocolate', color1: 'black', color2: 'yellow', …}
2
: 
{id: 3, accessory_id: '1', accessory: 'cherry', color1: 'red', color2: 'green', …}
3
: 
{id: 4, accessory_id: '1', accessory: 'cherry', color1: 'red', color2: 'white', …}
4
: 
{id: 5, accessory_id: '3', accessory: 'chocolate', color1: 'white', color2: 'white', …}
5
: 
{id: 6, accessory_id: '1', accessory: 'cherry', color1: 'red', color2: 'blue', …}
6
: 
{id: 7, accessory_id: '5', accessory: 'christmas-candy', color1: 'red', color2: 'red', …}
7
: 
{id: 8, accessory_id: '2', accessory: 'donut', color1: 'white', color2: 'black', …}
8
: 
{id: 9, accessory_id: '5', accessory: 'christmas-candy', color1: 'white', color2: 'white', …}
9
: 
{id: 10, accessory_id: '4', accessory: 'wcs', color1: 'blue', color2: 'white', …}
10
: 
{id: 11, accessory_id: '4', accessory: 'wcs', color1: 'yellow', color2: 'red', …}
11
: 
{id: 12, accessory_id: '2', accessory: 'donut', color1: 'white', color2: 'blue', …}
12
: 
{id: 13, accessory_id: '1', accessory: 'cherry', color1: 'red', color2: 'white', …}
13
: 
{id: 14, accessory_id: '1', accessory: 'cherry', color1: 'orange', color2: 'white', …}
14
: 
{id: 15, accessory_id: '2', accessory: 'donut', color1: 'red', color2: 'white', …}
15
: 
{id: 16, accessory_id: '2', accessory: 'donut', color1: 'red', color2: 'white', …}
16
: 
{id: 17, accessory_id: '1', accessory: 'cherry', color1: 'yellow', color2: 'green', …}
17
: 
{id: 18, accessory_id: '2', accessory: 'donut', color1: 'red', color2: 'white', …}
18
: 
{id: 19, accessory_id: '2', accessory: 'donut', color1: 'red', color2: 'red', …}
19
: 
{id: 20, accessory_id: '5', accessory: 'christmas-candy', color1: 'red', color2: 'white', …}
20
: 
{id: 21, accessory_id: '1', accessory: 'cherry', color1: 'white', color2: 'white', …}
21
: 
{id: 22, accessory_id: '4', accessory: 'wcs', color1: 'red', color2: 'red', …}
22
: 
{id: 23, accessory_id: '2', accessory: 'donut', color1: 'red', color2: 'yellow', …}
23
: 
{id: 24, accessory_id: '2', accessory: 'donut', color1: 'white', color2: 'blue', …}
24
: 
{id: 25, accessory_id: '3', accessory: 'chocolate', color1: 'white', color2: 'blue', …}
25
: 
{id: 26, accessory_id: '4', accessory: 'wcs', color1: 'red', color2: 'yellow', …}
26
: 
{id: 27, accessory_id: '5', accessory: 'christmas-candy', color1: 'yellow', color2: 'blue', …}
length
: 
27
[[Prototype]]
: 
Array(0)