export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: number;
  image: string;
  imageAlt: string;
  content: string;
};

import { blogPostsExtra } from "./blog-posts-extra";

const blogPostsBase: BlogPost[] = [
  {
    slug: "terrassement-quelles-etapes-pour-votre-projet",
    title: "Terrassement : les étapes clés pour réussir votre projet",
    metaTitle: "Terrassement : étapes, conseils et coûts en Somme (80) | Vilbert TP",
    metaDescription:
      "Tout savoir sur le terrassement : fouilles, remblais, compactage, DT-DICT. Guide complet par Vilbert TP, entreprise familiale dans la Somme (80).",
    excerpt:
      "Du diagnostic du terrain à la réception du chantier, découvrez toutes les étapes d'un terrassement réussi — et les erreurs à éviter.",
    category: "Terrassement",
    date: "2025-04-10",
    readingTime: 6,
    image: "/terrassementgrandchantier.jpg",
    imageAlt: "Terrassement grand chantier — pelle mécanique Vilbert TP Somme",
    content: `
## Qu'est-ce que le terrassement ?

Le **terrassement** désigne l'ensemble des travaux de déplacement, d'excavation et de remblaiement des terres nécessaires à la préparation d'un chantier. C'est l'étape préalable indispensable à toute construction, qu'il s'agisse d'une maison individuelle, d'un lotissement, d'un bâtiment industriel ou d'un aménagement de voirie.

Chez Vilbert TP, nous réalisons chaque année **plusieurs milliers de m³ de terrassement** en Hauts-de-France grâce à notre flotte propre d'engins.

---

## Les différentes phases du terrassement

### 1. La reconnaissance du terrain

Avant de commencer, une **étude géotechnique** peut être nécessaire pour analyser la nature du sol : sa portance, sa teneur en eau, la présence d'argiles gonflantes ou de remblais anthropiques. Cette étape conditionne le choix des matériels et des méthodes.

### 2. La déclaration de travaux (DT-DICT)

Toute fouille doit être précédée d'une **Déclaration de projet de Travaux (DT)** pour identifier les réseaux enterrés existants (eau, gaz, électricité, télécom). Vilbert TP procède systématiquement au piquetage et à la détection des réseaux avant toute intervention.

### 3. Le décaissement et les fouilles

C'est la phase d'excavation proprement dite :
- **Fouilles en pleine masse** : enlèvement d'un volume important de terre sur une grande surface (préparation de dalle, de parking…)
- **Fouilles en tranchée** : excavation linéaire étroite pour la pose de réseaux (eau, assainissement, électricité…)
- **Fouilles ponctuelles** : pour semelles de fondation, poteaux, regards…

Les engins utilisés vont de la **mini-pelle** (accès restreints, jardins, zones urbaines) aux **pelles hydrauliques 20 tonnes** pour les grands volumes.

### 4. L'évacuation des terres

Les terres excavées sont chargées et évacuées vers des filières de valorisation agréées. Selon la nature des matériaux :
- Terres propres → réutilisées en remblai ou valorisées
- Terres polluées → filières spécialisées

### 5. Le remblaiement et le compactage

Une fois les ouvrages réalisés, les tranchées et fouilles sont remblayées par couches successives de matériaux sélectionnés (grave, GNT…) et compactées mécaniquement. Le **compactage par couches** est essentiel pour éviter les tassements différentiels ultérieurs.

---

## Les erreurs courantes à éviter

- **Négliger la DT-DICT** : risque de toucher un réseau enterré (très grave)
- **Sous-estimer les volumes** : un sol en place représente moins de volume qu'une fois excavé (foisonnement)
- **Remblayer sans compacter** : source de tassements et fissurations
- **Travailler par temps de gel** : le sol gelé ne se compacte pas correctement

---

## Pourquoi choisir Vilbert TP pour votre terrassement ?

✅ **Flotte propre d'engins** — pelles, mini-pelles, niveleuses, sans sous-traitance
✅ **DT-DICT systématique** — sécurité des équipes et des réseaux
✅ **Expérience régionale** — nous connaissons les sols de la Somme, de l'Oise et du Pas-de-Calais
✅ **Entreprise certifiée MASE** — management de la sécurité reconnu
✅ **Devis gratuit sous 24h**

---

## Questions fréquentes

**Quel est le prix d'un terrassement ?**
Le coût dépend du volume à excaver, de la nature du sol, de l'accessibilité du chantier et du traitement des terres. Comptez généralement entre 15 et 40 €/m³ tout compris (fouille + évacuation). Contactez-nous pour un devis précis.

**Combien de temps dure un terrassement ?**
Un petit chantier particulier (préparation de fondations de maison) se réalise en 1 à 3 jours. Un grand terrassement industriel peut durer plusieurs semaines selon les volumes.

**Avez-vous les engins adaptés aux petits espaces ?**
Oui. Nous disposons de mini-pelles compactes capables d'intervenir dans les jardins, ruelles et zones à accès restreint.
    `,
  },

  {
    slug: "voirie-enrobe-paves-beton-quel-revetement-choisir",
    title: "Enrobé, pavés ou béton : quel revêtement de voirie choisir ?",
    metaTitle: "Enrobé, pavés ou béton : guide pour choisir votre revêtement | Vilbert TP",
    metaDescription:
      "Enrobé bitumeux, pavés béton ou granit, béton désactivé… Comparatif complet des revêtements de voirie pour particuliers et collectivités par Vilbert TP (Somme 80).",
    excerpt:
      "Enrobé, pavés, béton lavé, désactivé… Chaque revêtement a ses avantages. Guide comparatif pour faire le bon choix selon votre usage et votre budget.",
    category: "Voirie",
    date: "2025-05-15",
    readingTime: 7,
    image: "/posedenrobes.jpg",
    imageAlt: "Pose d'enrobé bitumeux — chantier voirie Vilbert TP Hauts-de-France",
    content: `
## Pourquoi le choix du revêtement est crucial

Le revêtement de voirie joue un rôle décisif dans la durabilité et l'esthétique de vos aménagements. Qu'il s'agisse d'une allée de particulier, d'une voirie communale ou d'un parking professionnel, le mauvais choix peut entraîner des réfections coûteuses en quelques années.

Vilbert TP intervient sur tous types de revêtements en Hauts-de-France. Voici notre guide comparatif.

---

## L'enrobé bitumeux

### Avantages
- **Résistance** : supporte les charges lourdes, idéal pour accès véhicules et voiries
- **Imperméabilité** : évacue rapidement les eaux de pluie
- **Entretien facile** : balayage, nettoyage haute pression
- **Prix compétitif** : l'un des revêtements les plus économiques à la pose
- **Durée de vie** : 15 à 30 ans avec un entretien correct

### Inconvénients
- Aspect moins esthétique (noir)
- Peut se ramollir par fortes chaleurs si sous-couche insuffisante
- Réparations localisées visibles

### Usage recommandé
Allées d'accès véhicules, voiries communales, parkings, zones industrielles.

---

## Les pavés béton ou granit

### Avantages
- **Esthétique** : nombreuses formes, couleurs et textures disponibles
- **Facilité de réparation** : chaque pavé est remplaçable individuellement
- **Perméabilité possible** : pavés drainants disponibles
- **Durée de vie** : +50 ans pour les pavés granit

### Inconvénients
- Coût à la pose plus élevé que l'enrobé
- Joints susceptibles de se déformer si sous-couche de sable insuffisante
- Entretien des joints (herbes, mousse)

### Usage recommandé
Allées décoratives, centres-bourgs, places publiques, terrasses.

---

## Le béton désactivé ou lavé

### Avantages
- **Esthétique naturelle** : granulats apparents, nombreuses teintes
- **Antidérapant** naturellement (texture rugueuse)
- **Durabilité** : 20 à 40 ans
- **Entretien minimal**

### Inconvénients
- Non réparable localement (zone entière à refaire si casse)
- Sensible aux chocs de mise en œuvre (délais de séchage à respecter)
- Prix intermédiaire

### Usage recommandé
Terrasses, allées piétonnes, abords de piscine, entrées de maison.

---

## Le béton lavé

Proche du désactivé mais avec des granulats plus fins, le **béton lavé** offre un aspect plus lisse et régulier. Idéal pour les espaces intérieurs/extérieurs à l'esthétique soignée.

---

## Tableau comparatif

| Revêtement | Prix relatif | Durée de vie | Esthétique | Entretien |
|---|---|---|---|---|
| Enrobé | ✅ Économique | 15–30 ans | Neutre | Facile |
| Pavés béton | ⚠️ Moyen | 25–40 ans | ✅ Bonne | Moyen |
| Pavés granit | ❌ Élevé | +50 ans | ✅✅ Très bonne | Faible |
| Béton désactivé | ⚠️ Moyen | 20–40 ans | ✅ Bonne | Faible |

---

## Questions fréquentes

**Peut-on poser de l'enrobé soi-même ?**
Non. La pose d'enrobé nécessite des engins spécialisés (finisseur, compacteur vibrant) et une maîtrise des températures de mise en œuvre. C'est un travail de professionnel.

**Faut-il un permis pour refaire son allée ?**
En général non, sauf si le projet modifie l'écoulement des eaux pluviales vers la voie publique ou si les travaux touchent un espace protégé. Renseignez-vous auprès de votre mairie.

**Quel entretien pour une allée en enrobé ?**
Un nettoyage annuel au karcher et une inspection visuelle tous les 5 ans. Les petites fissures peuvent être colmatées avec un enduit de scellement avant qu'elles ne s'aggravent.
    `,
  },

  {
    slug: "assainissement-individuel-fosse-septique-ou-tout-a-legout",
    title: "Assainissement individuel : fosse septique ou tout-à-l'égout ?",
    metaTitle: "Fosse septique vs tout-à-l'égout : que choisir ? | Vilbert TP Somme",
    metaDescription:
      "Assainissement individuel ou collectif ? Fosse toutes eaux, puits filtrant, raccordement réseau… Guide complet pour particuliers en Somme (80) par Vilbert TP.",
    excerpt:
      "Fosse septique, microstation, puits filtrant ou raccordement au réseau public : comment choisir la bonne solution d'assainissement pour votre terrain ?",
    category: "Travaux Particuliers",
    date: "2025-06-01",
    readingTime: 8,
    image: "/fosseseptique.jpg",
    imageAlt: "Pose d'une fosse septique toutes eaux par Vilbert TP — assainissement individuel Somme",
    content: `
## Assainissement collectif ou individuel : définitions

**L'assainissement collectif** (tout-à-l'égout) consiste à raccorder les eaux usées de votre habitation au réseau public d'assainissement. L'eau est traitée par la station d'épuration communale.

**L'assainissement non collectif (ANC)** — anciennement "assainissement autonome" — s'applique aux habitations non desservies par le réseau collectif. La totalité du traitement des eaux usées est réalisée sur la parcelle.

En zone rurale, en Somme et dans les Hauts-de-France, **une grande majorité des habitations** relèvent de l'assainissement individuel.

---

## Quand êtes-vous obligé de vous raccorder au tout-à-l'égout ?

La loi impose le raccordement au réseau collectif **dans les 2 ans** suivant sa mise en service dans votre rue. Si le réseau n'est pas présent, vous devez équiper votre terrain en assainissement non collectif conforme.

---

## Les solutions d'assainissement individuel

### La fosse toutes eaux

C'est la solution la plus répandue. Elle reçoit l'ensemble des eaux usées (WC + cuisine + douche) et assure une **pré-épuration par digestion anaérobie**. Les eaux clarifiées sont ensuite évacuées dans un épandage ou un puits filtrant.

**Volume minimum légal** : 3 000 litres pour une habitation jusqu'à 5 pièces principales.

### Le puits filtrant / épandage souterrain

Après la fosse, les eaux clarifiées infiltrent le sol par des tranchées drainantes ou un puits d'infiltration. **Condition** : le sol doit être suffisamment filtrant (ni argile, ni nappe phréatique affleurante).

### La microstation d'épuration

Traitement biologique intensif dans un dispositif compact. Idéale pour les terrains non filtrants ou de petite superficie. Coût plus élevé, mais performances épuratoires supérieures.

### Le raccordement au tout-à-l'égout

Si le réseau est disponible : raccordement obligatoire. Cela implique la pose d'une tranchée depuis l'habitation jusqu'au regard de branchement sur le réseau public.

---

## Le rôle du SPANC

Le **Service Public d'Assainissement Non Collectif (SPANC)** de votre commune est chargé de contrôler vos installations. Il doit valider votre projet avant travaux et réaliser une visite de conformité à la fin.

**Important** : tout projet d'assainissement individuel doit être soumis au SPANC avant commencement des travaux.

---

## Ce que réalise Vilbert TP

✅ Étude de faisabilité et consultation SPANC
✅ Terrassement complet (fouilles, evacuation terres)
✅ Pose de la fosse toutes eaux
✅ Création de l'épandage ou puits filtrant
✅ Raccordement depuis la maison
✅ Remblaiement et compactage
✅ Demande de réception SPANC

---

## Questions fréquentes

**Quel est le prix d'une fosse septique posée ?**
Comptez entre 5 000 et 12 000 € tout compris (fourniture + pose + terrassement + épandage), selon la taille de la maison et la nature du terrain.

**Ma fosse ancienne est-elle conforme ?**
Si votre installation date d'avant 2012 ou si le SPANC l'a classée non conforme, vous avez l'obligation de la réhabiliter dans un délai fixé par arrêté municipal.

**Peut-on installer une fosse septique sur un terrain argileux ?**
Pas d'épandage possible sur terrain argileux. Il faudra orienter vers une microstation avec rejet après traitement, ou un raccordement au réseau si disponible.
    `,
  },

  {
    slug: "viabilisation-terrain-guide-complet",
    title: "Viabilisation d'un terrain : le guide complet étape par étape",
    metaTitle: "Viabilisation de terrain : étapes, coûts et délais | Vilbert TP",
    metaDescription:
      "Viabiliser un terrain : eau, électricité, gaz, assainissement, voirie… Guide complet par Vilbert TP, spécialiste VRD en Hauts-de-France. Devis gratuit.",
    excerpt:
      "Eau, électricité, gaz, assainissement, voirie d'accès… La viabilisation d'un terrain passe par de nombreuses étapes. On vous explique tout.",
    category: "Réseaux",
    date: "2025-06-20",
    readingTime: 9,
    image: "/vrd.jpg",
    imageAlt: "Viabilisation terrain VRD — réseaux enterrés Vilbert TP Hauts-de-France",
    content: `
## Qu'est-ce que la viabilisation d'un terrain ?

**Viabiliser un terrain**, c'est lui apporter toutes les connexions aux réseaux publics nécessaires à la construction et à l'habitation :

- 💧 **Eau potable** (réseau AEP)
- ⚡ **Électricité** (ENEDIS)
- 🔥 **Gaz** (GRDF) — si disponible dans la rue
- 🚿 **Assainissement** (réseau EU/EP ou ANC)
- 📡 **Télécom / fibre optique** (Orange, autre opérateur)
- 🛣️ **Voirie d'accès** (création ou raccordement à la voie publique)

Un terrain dit "viabilisé" est prêt à accueillir une construction sans travaux de raccordement supplémentaires.

---

## Étape 1 : Vérifier les réseaux disponibles

Avant tout, renseignez-vous auprès de la mairie et consultez le **Plan Local d'Urbanisme (PLU)** pour savoir quels réseaux sont disponibles à proximité du terrain. Un terrain isolé peut nécessiter des extensions importantes et coûteuses.

---

## Étape 2 : Les démarches administratives

### DT-DICT (Déclaration de Travaux)
Obligatoire avant toute fouille. Vous devez déclarer votre projet auprès de tous les gestionnaires de réseaux (ENEDIS, GRDF, Orange, Véolia…) via le portail [reseaux-et-canalisations.ineris.fr](https://reseaux-et-canalisations.ineris.fr).

### Demandes de raccordement
Chaque opérateur a sa propre procédure :
- **Eau potable** : contact avec la régie communale ou Véolia
- **Électricité** : demande de raccordement ENEDIS (délai 3 à 6 mois)
- **Gaz** : demande GRDF si la rue est équipée
- **Télécom** : contact avec l'opérateur fibre de la zone

---

## Étape 3 : Le terrassement général

Avant toute pose de réseau, le terrain doit être terrassé :
- Décaissement des zones de fouille
- Création des tranchées pour chaque réseau
- Respect des profondeurs réglementaires (ex : eau potable à 60-80 cm de profondeur)

---

## Étape 4 : La pose des réseaux

Les réseaux sont posés dans des **tranchées distinctes** selon les règles de co-activité :

| Réseau | Profondeur min | Grillage avertisseur |
|---|---|---|
| Eau potable | 80 cm | Bleu |
| Électricité HTA/BT | 80 cm | Rouge |
| Gaz | 60 cm | Jaune |
| Télécom | 50 cm | Vert |
| Assainissement EU | Selon pente | Marron |

Chaque réseau est signalé par un **grillage avertisseur** de couleur normalisée, obligatoire.

---

## Étape 5 : La voirie d'accès

Simultanément ou après les réseaux, la voirie d'accès au terrain est créée :
- Terrassement de la plateforme
- Pose des couches de fondation (grave non traitée)
- Finition en enrobé ou pavés selon le projet

---

## Étape 6 : Les essais et réceptions

Chaque réseau fait l'objet de tests avant remblaiement :
- **Test d'étanchéité** pour les réseaux d'eau et d'assainissement
- **Mise sous tension** après vérification ENEDIS
- **Inspection caméra** possible pour l'assainissement

---

## Coûts de viabilisation

Les coûts varient très fortement selon l'éloignement aux réseaux existants :

| Poste | Fourchette indicative |
|---|---|
| Eau potable (branchement + tranchée) | 2 000 – 5 000 € |
| Électricité (raccordement ENEDIS) | 1 500 – 4 000 € |
| Gaz (si disponible) | 1 000 – 3 000 € |
| Assainissement (réseau ou ANC) | 3 000 – 12 000 € |
| Voirie d'accès | 5 000 – 20 000 € |
| **Total indicatif** | **15 000 – 50 000 €** |

Ces chiffres sont indicatifs. Demandez un devis détaillé à Vilbert TP.

---

## Pourquoi confier votre viabilisation à Vilbert TP ?

Vilbert TP est un **interlocuteur unique** pour l'ensemble des prestations VRD :
- Terrassement
- Tous types de réseaux (EU, EP, eau, électricité, gaz, télécom)
- Voirie d'accès
- Coordination avec les opérateurs

Nous intervenons dans la **Somme (80)**, l'**Oise (60)** et le **Pas-de-Calais (62)**.
    `,
  },

  {
    slug: "allee-enrobee-particulier-prix-entretien-duree-vie",
    title: "Allée en enrobé pour particulier : prix, entretien et durée de vie",
    metaTitle: "Allée en enrobé pour particulier : prix, entretien, durée de vie | Vilbert TP",
    metaDescription:
      "Tout savoir sur l'allée en enrobé : coût au m², préparation du sol, durée de vie, entretien… Guide complet par Vilbert TP, spécialiste travaux particuliers dans la Somme.",
    excerpt:
      "Une allée en enrobé bien posée dure 20 ans sans problème. Prix, sous-couche, finition, entretien : tout ce qu'il faut savoir avant de se lancer.",
    category: "Travaux Particuliers",
    date: "2025-07-05",
    readingTime: 6,
    image: "/travauxparticuliers.jpg",
    imageAlt: "Allée enrobée pour particulier — Vilbert TP travaux Somme",
    content: `
## Pourquoi choisir l'enrobé pour son allée ?

L'**enrobé bitumeux** est le revêtement de référence pour les allées de maison et accès véhicules. Sa popularité tient à un rapport qualité/prix imbattable : solide, imperméable, facile d'entretien, et accessible à tous les budgets.

Chez Vilbert TP, nous posons des allées en enrobé pour les particuliers de la Somme, de l'Oise et du Pas-de-Calais depuis plus de 30 ans.

---

## Les étapes de pose d'une allée en enrobé

### 1. Décaissement et préparation du sol

La première étape, souvent négligée, est la plus importante. Le sol existant est décaissé sur **20 à 30 cm de profondeur** minimum. Une mauvaise préparation est la principale cause de défaillance prématurée.

### 2. Pose de la couche de fondation

Une **grave non traitée (GNT)** est répandue et compactée pour former la couche de base. Elle assure la rigidité et le drainage de l'ensemble. Épaisseur typique : 15 à 20 cm.

### 3. Application de la couche d'accrochage

Un **émulsion de bitume** (couche d'accrochage) est pulvérisée sur la fondation pour garantir l'adhérence de l'enrobé.

### 4. Mise en œuvre de l'enrobé

L'enrobé est appliqué à chaud (150-180°C) sur **4 à 6 cm d'épaisseur** et compacté immédiatement au rouleau vibrant. La qualité du compactage détermine la durée de vie finale.

### 5. Finitions

- Pose de **bordures béton** pour contenir l'enrobé sur les côtés
- Création d'un **avaloir** si nécessaire pour l'évacuation des eaux pluviales
- Délai de mise en service : 24 à 48h minimum

---

## Le prix d'une allée en enrobé

Le prix d'une allée en enrobé dépend de plusieurs facteurs :

| Paramètre | Impact sur le prix |
|---|---|
| Surface totale | Plus la surface est grande, plus le prix/m² baisse |
| Décaissement nécessaire | Sols meubles = coût supplémentaire |
| Présence de bordures | +5-10 €/ml |
| Accessibilité du chantier | Accès difficile = surcoût |
| Finition (couleur, granulométrie) | Options premium disponibles |

**Fourchette indicative** : 25 à 50 €/m² tout compris (décaissement + fondation + enrobé + bordures).

> Demandez toujours un devis détaillé. Méfiez-vous des prix trop bas qui correspondent souvent à une couche d'enrobé posée directement sur sol non préparé.

---

## Durée de vie et entretien

Bien posée, une allée en enrobé dure **15 à 30 ans**. La durée de vie dépend principalement de :
- La qualité de la couche de fondation
- L'épaisseur de l'enrobé
- La nature du sol (sol humide ou argileux = risque de soulèvement au gel)

### Entretien courant
- **Nettoyage annuel** au karcher suffit
- Éviter les huiles de moteur (solvants agressifs pour le bitume)
- **Inspection des bords** : les rives sont les zones les plus vulnérables

### Signes de vieillissement normaux
- Grésaillement de surface après 10-15 ans (oxydation du bitume)
- Légères fissures capillaires : à traiter avec un enduit de cicatrisation
- Nids-de-poule : signe d'une fondation défaillante ou d'une épaisseur insuffisante

---

## Questions fréquentes

**Peut-on poser de l'enrobé sur l'existant ?**
Oui, sous conditions : l'enrobé existant doit être sain et stable. Un ragréage ou fraisage préalable peut être nécessaire.

**Combien de temps dure une pose ?**
Pour une allée standard de 100 m², comptez 1 à 2 jours de chantier.

**Faut-il une autorisation pour refaire son allée ?**
En général non pour une réfection à l'identique. Un simple accord de voisinage si des travaux jouxtent la voie publique.

**L'enrobé est-il compatible avec les points de charge pour véhicule électrique ?**
Parfaitement. Des fourreaux peuvent être intégrés lors de la pose pour passer les câbles ultérieurement.
    `,
  },

  {
    slug: "certification-mase-engagement-securite-vilbert-tp",
    title: "Certification MASE : notre engagement pour la sécurité sur vos chantiers",
    metaTitle: "Certification MASE Vilbert TP — Sécurité & Management SSE",
    metaDescription:
      "Vilbert TP est certifié MASE Hauts-de-France. Découvrez ce que cette certification signifie pour vous : sécurité, qualité, engagement durable.",
    excerpt:
      "MASE, c'est bien plus qu'un logo. C'est un engagement contractuel envers la sécurité des hommes, la qualité d'intervention et le respect de l'environnement.",
    category: "Entreprise",
    date: "2025-07-20",
    readingTime: 5,
    image: "/chantier.jpg",
    imageAlt: "Chantier sécurisé Vilbert TP — certification MASE Hauts-de-France",
    content: `
## Qu'est-ce que la certification MASE ?

Le **MASE** (Manuel d'Amélioration Sécurité des Entreprises) est un système de management de la sécurité reconnu dans les secteurs de l'industrie et des travaux. Délivré par l'**Association MASE Hauts-de-France**, il atteste que l'entreprise certifiée répond à des exigences strictes en matière de :

- **Sécurité** des salariés et sous-traitants
- **Santé** au travail
- **Environnement** (SSE)

Vilbert TP est **certifié MASE Hauts-de-France**, ce qui distingue notre entreprise parmi les prestataires de travaux de la région.

---

## Les 5 axes du référentiel MASE

### Axe 1 — Engagement de la direction
La direction s'engage formellement sur une politique SSE écrite, des objectifs mesurables et des ressources dédiées.

### Axe 2 — Compétences et qualifications
Chaque salarié bénéficie des formations, habilitations et aptitudes médicales nécessaires à son poste. Chez Vilbert TP, **100% de nos équipes** sont formées aux risques liés à leurs chantiers.

### Axe 3 — Préparation et organisation du travail
Avant chaque chantier, une analyse des risques est réalisée (Plan de Prévention, analyse de risques spécifiques). Les équipements de protection individuelle (EPI) sont fournis et contrôlés.

### Axe 4 — Contrôles et amélioration continue
Les incidents sont analysés, les actions correctives documentées. Des audits internes réguliers garantissent le maintien du niveau.

### Axe 5 — Intérêt pour la sécurité
La culture sécurité est portée à tous les niveaux, du chef d'entreprise à l'opérateur de terrain. Les suggestions d'amélioration sont valorisées.

---

## Ce que la certification MASE apporte à nos clients

### Pour les donneurs d'ordres (collectivités, industriels)
- Réduction des risques juridiques en cas d'accident
- Conformité aux exigences d'achat de nombreux donneurs d'ordres industriels
- Assurance que le prestataire gère ses risques de façon structurée

### Pour les chantiers de voirie et terrassement
- Plans de circulation et de signalisation établis avant démarrage
- Analyse des risques liés au voisinage (riverains, réseaux)
- Matériels contrôlés et conformes

---

## MASE et réseaux : une exigence particulière

Sur les chantiers de pose de réseaux enterrés, le risque d'atteinte à des ouvrages existants est majeur. Notre certification MASE garantit :

✅ DT-DICT systématique avant toute fouille
✅ Formation des équipes à l'approche manuelle des réseaux
✅ Procédures de consignation des zones sensibles
✅ Matériels de détection embarqués

---

## Questions fréquentes

**La certification MASE est-elle obligatoire pour un chantier de voirie ?**
Non, elle n'est pas légalement obligatoire. Mais de nombreux donneurs d'ordres (industrie, grands comptes) l'exigent dans leurs appels d'offres. Elle est un gage de sérieux.

**Comment est délivrée la certification MASE ?**
Par un audit externe réalisé par un organisme indépendant missionné par l'association MASE. La certification est renouvelée tous les 3 ans après audit de suivi annuel.

**Vilbert TP peut-il intervenir sur des sites industriels ?**
Oui. La certification MASE est précisément adaptée aux interventions chez des donneurs d'ordres industriels qui imposent cette qualification à leurs prestataires.
    `,
  },
];

export const blogPosts: BlogPost[] = [...blogPostsBase, ...blogPostsExtra].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
