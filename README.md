# AndersBille06012021
Eksamens projekt


API routes:

/patient
er der oprettet:

    get
    post
    delete
    put
-------
delete skal der angives et id =>f.eks. /patient/11

på .get kan der også sendes efter et specifikt id
f.eks. => /patient/6


de samme finde for 
/behandling 
og
/nyheder
---------------------------------------------------------------------------
Docker

docker bliver bygget ud fra dockerfile ved at bruge efterfølgende kommando inde i projektets mappe (" .") til sidst er vigtigt ellers ved den ikke hvor den skal finde dockerfile
docker build -t andersbille06012021 .

du kan ved brug af docker images se om den er blivet bygget

du køre det efterfølgende med følgende kommando
docker run -p 3963:3963 -d andersbille06012021

-p 3963:3963 specificere hvilken port det skal køre på
den første er den port man skal bruge efter localhost og den første er det man "lytter" på inde i server.js
-d gør at instancen af docker gøre "detached" så man ikke låser en kommandopromt til eller gør det umuligt at ændre noget imens serveren kører