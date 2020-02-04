import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Musée du Louvre",
    description:
      "Le Louvre possède une longue histoire de conservation artistique et historique, depuis l'Ancien Régime jusqu'à nos jours.",
    imageUrl:
      "https://vivreparis.fr/wp-content/uploads/2019/01/Capture-d%E2%80%99e%CC%81cran-2019-01-03-a%CC%80-14.09.52-1160x701.png",
    address: "Rue de Rivoli, 75001 Paris",
    location: {
      lat: 48.860611,
      lng: 2.33764
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Musée du Louvre",
    description:
      "Le Louvre possède une longue histoire de conservation artistique et historique, depuis l'Ancien Régime jusqu'à nos jours.",
    imageUrl:
      "https://www.sortiraparis.com/images/80/18029/255462-les-jeunes-ont-la-parole-la-nocturne-au-musee-du-louvre.jpg",
    address: "Rue de Rivoli, 75001 Paris",
    location: {
      lat: 48.860611,
      lng: 2.33764
    },
    creator: "u2"
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(p => p.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
