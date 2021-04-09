# Kata Bowling

Une partie de bowling compte **dix carreaux** (frames en anglais). Chaque joueur lance **deux boules** à chaque carreau, sauf en cas de strike.

Un **strike** consiste à faire tomber les **dix quilles** (pins en anglais) avec la **première boule**.

Le **spare** consiste à faire tomber les **dix quilles avec les deux tirs consécutifs du carreau**.

Le score de chaque joueur est le **nombre total de quilles** qu'il a abattues plus **les bonus** donnés par les strikes ou les spares.

• Pour un jeu ouvert (pas de strike et pas de spare), le score d'un carreau est simplement le nombre de quilles abattues pour les deux lancers.

• En cas de strike, le score est donc de **10** plus un bonus égal au nombre de quilles abattues après les **deux lancers suivants**.

• En cas de spare, le score est de **10** plus un bonus égal au nombre de quilles abattues au **lancer suivant**.

Ainsi, le score parfait est de 300 points, pour douze strikes consécutifs.

Le dixième jeu est particulier. En cas de **strike** au premier lancer, **deux lancers** supplémentaires sont accordés. En cas de réalisation d’un **spare**, **un lancer** supplémentaire est accordé.

Au maximum, **21 lancés** sont possibles.

## Avant de commencer

* Créer votre projet `BowlingGame`
* Créer votre classe de test `BowlingGameTest`

Nous allons tester la classe `Game` contenant deux méthodes, nous allons bien évidemment écrire les tests avant de créer cette classe et ses méthodes... TDD remember. Juste pour avoir une idée des méthodes que nous allons mettre en place (cela peut changer en cours de route, c'est le but du TDD ;) ) nous aurons donc potentiellement ces deux méthodes:

* `roll(pins: int)` qui sera appelé à chaque fois qu'un joueur lance une boule. L'argument représente le nombre de quilles touchées
* `score() : int` qui sera appelé à la fin du jeu pour calculer le score final

## Etapes à suivre (ou pas) :

**1-** Tester un score total de zéro (Gutter game)

**2-** Tester un score total de 20 (1 point pour chaque *roll* (lancé))

**3-** Tester un *spare* => Exemple : 5 5 3 0 0 0 0 ... = (10 + 3) + 3 + 0 + 0 + 0+ ... = 16)

**4-** Tester un *strike* => Exemple : 10 3 4 0 0 0 0 ... = (10 + 3 + 4) + (3 + 4) + 0 + 0 +... = 24)

**5-** Tester un score parfait (300)
