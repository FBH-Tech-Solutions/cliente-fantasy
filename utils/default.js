import { Race } from "../classes/ClassRace.js";
import { New } from "../classes/ClassNews.js";

export let races = [
    new Race(1, 'Exciting race through the bustling streets of New York', 'New York', '../assets/races/bahrein.jpg', true),
    new Race(2, 'Scenic race along the coastline of Los Angeles', 'Los Angeles', '../assets/races/bahrein.jpg', false),
    new Race(3, 'Thrilling race in the heart of Chicago', 'Chicago', 'chicago.jpg', true),
    new Race(4, 'Spectacular race along the beaches of Miami', 'Miami', 'miami.jpg', false),
    new Race(5, 'Iconic race in the picturesque city of San Francisco', 'San Francisco', 'sanfrancisco.jpg', true),
    new Race(6, 'Glamorous race in the entertainment capital of Las Vegas', 'Las Vegas', 'lasvegas.jpg', false),
    new Race(7, 'Scenic race through the beautiful landscapes of Seattle', 'Seattle', 'seattle.jpg', true),
    new Race(8, 'Exciting race at high altitudes in Denver', 'Denver', 'denver.jpg', false),
    new Race(9, 'Historic race through the streets of Boston', 'Boston', 'boston.jpg', true),
    new Race(10, 'Challenging race in the vibrant city of Dallas', 'Dallas', 'dallas.jpg', false)
]

export let newsDefault = [
      new New(
        "f1_image_4.jpg",
        "Max Verstappen Crowned World Champion",
        "Max Verstappen becomes the Formula 1 World Champion after a season filled with excitement and rivalry with Lewis Hamilton."
      ),
      new New(
        "f1_image_5.jpg",
        "New Technical Regulations for the 2023 Season",
        "The FIA has introduced new technical regulations that will significantly change the look of F1 cars starting from the 2023 season."
      ),
      new New(
        "f1_image_6.jpg",
        "Red Bull Racing Signs Young Talent",
        "Red Bull Racing has signed a promising young driver for their talent development program in the quest for the next F1 champion."
      ),
      new New(
        "f1_image_7.jpg",
        "Sebastian Vettel Announces Retirement",
        "Four-time world champion Sebastian Vettel has announced his retirement from the sport after a successful career in Formula 1."
      ),
      new New(
        "f1_image_8.jpg",
        "New Main Sponsor for Mercedes",
        "The Mercedes-AMG Petronas team has secured a multimillion-dollar deal with a new main sponsor, providing an additional financial boost to the team."
      ),
      new New(
        "f1_image_10.jpg",
        "New Minimum Weight Regulation for Drivers",
        "The FIA has introduced a new regulation that establishes a minimum weight for Formula 1 drivers to address health and safety issues in the sport."
      )
]

