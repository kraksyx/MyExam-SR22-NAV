const questions = [
    {
        "question": "1. What is the MINR Fuel?",
        "options": [
            "Fuel Required minus the Taxi + Contingency.",
            "* Trip + Alternate + Final Reserve."
        ],
        "correct": 0
    },
    {
        "question": "2. What is the wind seen in METARs & TAFs?",
        "options": [
            "True Wind.",
            "* You may be asked to decode some METARs & TAFs in the exam."
        ],
        "correct": 0
    },
    {
        "question": "3. How long is a TAF valid? How many and how frequent are TAFs issued?",
        "options": [
            "TAF is valid for 30 hrs. 4 TAFs are issued every 6 hours.",
            "* In UAE, TAF is valid for 24 hrs."
        ],
        "correct": 0
    },
    {
        "question": "4. How do you calculate Max Drift (Formula)?",
        "options": [
            "Max drift is the full wind speed divided by the 2 (120kts). For every 60kts increase the number by 1",
            "i.e., if your speed is 60kts then divide the wind speed by 1, if 120kts then 2 and if 180kts then 3 and so on…",
            "Max. Drift = Wind Speed / Speed Number."
        ],
        "correct": 0
    },
    {
        "question": "5. What is the IN and OUT altitudes for VM4 & VM7?",
        "options": [
            "VM4: OUT... 1500ft, IN... 2000ft.",
            "VM7: OUT... 2500ft, IN... 2000ft."
        ],
        "correct": 0
    },
    {
        "question": "6. What is the Formula for the Rate of Descent?",
        "options": [
            "GS x 5 = ROD."
        ],
        "correct": 0
    },
    {
        "question": "7. Formula for the distance to TOD?",
        "options": [
            "((Change in Alt./1000) *3) +3 = Distance to TOD."
        ],
        "correct": 0
    },
    {
        "question": "8. What are Isogonal Lines?",
        "options": [
            "They are lines of equal Variation."
        ],
        "correct": 0
    },
    {
        "question": "9. Define Wind Shear.",
        "options": [
            "A sudden change in the speed or direction of Vertical or Horizontal wind."
        ],
        "correct": 0
    },
    {
        "question": "10. What does BCMG in a TAF mean?",
        "options": [
            "It is when a gradual change is bound to become the prevailing weather from a certain time."
        ],
        "correct": 0
    },
    {
        "question": "11. What does TEMPO in a TAF mean?",
        "options": [
            "It is when there are going to be temporary fluctuations in the forecast in a given time frame, but it will revert back to the weather before not more than 1 hour."
        ],
        "correct": 0
    },
    {
        "question": "12. You are at 7,500ft and want to descend to 1,500ft at 3 NM from the aerodrome. What is the distance to the TOD?",
        "options": [
            "Use the formula from Q.7 and compute the distance. I.e. Dist. to TOD = 21NM."
        ],
        "correct": 0
    },
    {
        "question": "13. What is the EFTA navigation technique?",
        "options": [
            "Clock – Map – Ground."
        ],
        "correct": 0
    },
    {
        "question": "14. What is the fuel consumption of the SR22 while a descent at 20% PWR?",
        "options": [
            "0.1USG/NM."
        ],
        "correct": 0
    },
    {
        "question": "15. What is the Final reserve fuel for day VFR flight?",
        "options": [
            "30 Min Day VFR.",
            "Day VFR: 30 Min.",
            "Night VFR: 45 Min.",
            "IFR: 45 Min."
        ],
        "correct": 0
    },
    {
        "question": "16. What are Fix lines used for?",
        "options": [
            "Fan lines are used to determine drift."
        ],
        "correct": 0
    },
    {
        "question": "17. What are Track lines:",
        "options": [
            "Track lines are used to determine your route over the ground."
        ],
        "correct": 0
    },
    {
        "question": "18. What altitude must be flown over the congested part of a city or town?",
        "options": [
            "An altitude that will permit, in the event of an emergency rising, a landing to be made without undue hazard to any person or thing or property on the surface."
        ],
        "correct": 0
    },
    {
        "question": "19. During a 50NM navigation leg, it is found that the aircraft is 4° left of course after 5 minutes at 120kts ground speed. How much must the heading be changed regain the planned track? How long must this new heading be flown to intercept the planned track?",
        "options": [
            "You can compute this by using the 1 in 60 rule.",
            "Angle = (Distance off track/Distance to go) * 60.",
            "Answer: 8° to the Right, for 5 Minutes."
        ],
        "correct": 0
    },
    {
        "question": "20. When shall an emergency be declared?",
        "options": [
            "When the calculated fuel at landing is less than the Final Reserve fuel."
        ],
        "correct": 0
    },
    {
        "question": "21. How do you calculate the contingency fuel?",
        "options": [
            "5% of Trip fuel or 5 Min of flying at cruise speed.",
            "3% if you have an enroute alternate aerodrome."
        ],
        "correct": 0
    },
    {
        "question": "22. When making position reports to ATC, when must a revised ETA be communicated?",
        "options": [
            "When the delay is 3 Minutes and more."
        ],
        "correct": 0
    },
    {
        "question": "23. What is the check that has to be done every 10-15 minutes in flight?",
        "options": [
            "FREDA check (Fuel, Radio, Engine, Direction, Altitude)."
        ],
        "correct": 0
    },
    {
        "question": "24. What does FM signify in a TAF?",
        "options": [
            "It is usually when the weather conditions are expected to have a sudden change from a certain time. It is when the change happens in less than an hour."
        ],
        "correct": 0
    },
    {
        "question": "25. Describe how you would avoid weather using the Dogleg method?",
        "options": [
            "Make a 60° turn into the direction that will make you avoid the WX, and start your timer.",
            "Once abeam clear of the weather, make a 60° turn back to fly parallel to your course.",
            "Once fully clear of the weather, make another 60° turn towards your course to get back onto your course. The timing of this leg should be the same as the time you initially recorded for your first leg."
        ],
        "correct": 0
    },
    {
        "question": "26. What does OMD, OMP and OMR stand for? Can we fly into them?",
        "options": [
            "OMD: Danger Area, you can enter after checking NOTAMs and they might have specific timings.",
            "OMP: Prohibited Area, you can never enter these areas.",
            "OMR: Restricted Area, you can only enter these areas with prior ATC clearance."
        ],
        "correct": 0
    },
    {
        "question": "27. What Documents must be carried on all solo flights?",
        "options": [
            "UAE ID",
            "Passport",
            "Medical Certificate",
            "Student Authorisation",
            "Company ID",
            "Airside Pass",
            "Logbook."
        ],
        "correct": 0
    },
    {
        "question": "28. Describe how to select a Minimum safe altitude for your Navigation legs?",
        "options": [
            "Plan your route and scan 5NM left and right of the course for high obstacles.",
            "Add 1000ft above the highest obstacle at Non-Mountainous Terrain.",
            "Add 2000ft above the highest obstacle at a Mountainous Terrain."
        ],
        "correct": 0
    },
    {
        "question": "29. Define CAVOK.",
        "options": [
            "Visibility 10km or more",
            "No significant clouds at or below 5000ft or MSA whichever is lower."
        ],
        "correct": 0
    },
    {
        "question": "30. How do you calculate sector time (STM), for each leg of your navigation during planning?",
        "options": [
            "STM = (Distance/GS) x 60."
        ],
        "correct": 0
    },
    {
        "question": "31. Explain the following ATC phraseologies: “Hold short” and “Enter and Backtrack.”",
        "options": [
            "Hold Short: Do not enter the Runway/Taxiway in use, stop at the holding point.",
            "Backtrack: An airport procedure where any portion of a runway as a taxiway for an aircraft to taxi in the opposite direction from which it will take off or has landed."
        ],
        "correct": 0
    },
    {
        "question": "32. What must be done if unable to comply with an ATC clearance or restriction?",
        "options": [
            "Inform ATC “UNABLE” and ask of another suitable clearance and why."
        ],
        "correct": 0
    },
    {
        "question": "33. Who is responsible for attaining information with regards to weather and NOTAMs prior to a flight?",
        "options": [
            "Pilot in Command."
        ],
        "correct": 0
    },
    {
        "question": "34. If two aircraft are approaching at a right angle to each other, who shall give way?",
        "options": [
            "The aircraft on the left of the other aircraft has to give way i.e. The aircraft on the right has the Right of Way."
        ],
        "correct": 0
    },
    {
        "question": "35. What is the procedure for radio failure in GFA1 after your already checked the frequency and headset etc. Explain how you will come back to land?",
        "options": [
            "Squawk 7600 and keep transmitting blind.",
            "Route to CMX and orbit over CMX.",
            "Observe the circuit and join the Outer circuit or downwind if traffic allows.",
            "Lookout for light signals",
            "Proceed to land."
        ],
        "correct": 0
    },
    {
        "question": "36. What must the alternate fuel be sufficient to carry out?",
        "options": [
            "It must be sufficient to fly from the missed approach point at the destination aerodrome until landing at the alternate aerodrome."
        ],
        "correct": 0
    },
    {
        "question": "37. Military Aircraft forms up next to you then initiates a slow, level turn. What should you do?",
        "options": [
            "Follow the instructions given by the interceptor.",
            "Notify the appropriate ATC.",
            "Try to communicate with the Interceptor on 243Mhz or 121.5Mhz",
            "Squawk 7700 unless otherwise instructed by the ATC."
        ],
        "correct": 0
    },
    {
        "question": "38. Approximately how far can the SR22 glide in still air?",
        "options": [
            "1.4NM/1000ft."
        ],
        "correct": 0
    },
    {
        "question": "39. What is the minimum ceiling and visibility for solo day VFR cross country flights?",
        "options": [
            "Ceiling: 3500ft",
            "Visibility: 5Km."
        ],
        "correct": 0
    },
    {
        "question": "40. What is Trip Fuel?",
        "options": [
            "Fuel for take-off and climb to initial cruising level/altitude.",
            "Fuel from Top of Climb (TOC) to Top of Descent (TOD).",
            "Fuel from top of descent to approach initiation.",
            "Fuel for approach and landing at the destination aerodrome."
        ],
        "correct": 0
    },
    {
        "question": "41. What is the procedure for inadvertently entering IMC in a VFR Flight?",
        "options": [
            "Maintain Straight and Level flight on instruments.",
            "Switch on Pitot Heat.",
            "Execute reciprocal heading rate 1 turn.",
            "Climb or descend to MSA if needed."
        ],
        "correct": 0
    },
    {
        "question": "42. What equipment must be carried on board if operating over water, greater than the gliding distance to shore?",
        "options": [
            "Life Jacket and Survivor Locator light."
        ],
        "correct": 0
    },
    {
        "question": "43. How far over water may the SR22 operate without any additional equipment?",
        "options": [
            "Limited to no more than 30min of flight."
        ],
        "correct": 0
    },
    {
        "question": "44. Define MEA.",
        "options": [
            "It is the Minimum enroute altitude, the lowest published altitude between radio navigation fixes that ensures acceptable coverage and terrain clearance."
        ],
        "correct": 0
    },
    {
        "question": "45. What is the maximum deviation from an ATC assigned altitude or flight level?",
        "options": [
            "200ft."
        ],
        "correct": 0
    },
    {
        "question": "46. What is the purpose of an ATC clearance?",
        "options": [
            "Instructions, Safety and Traffic Separation."
        ],
        "correct": 0
    },
    {
        "question": "47. If two aircraft are approaching head on and there is a risk of collision, who shall deviate?",
        "options": [
            "Both the Aircrafts shall deviate to the right."
        ],
        "correct": 0
    },
    {
        "question": "48. What documents must be carried on all flights?",
        "options": [
            "Self-Documents: Medical Certificate, Company ID, Logbook, UAE ID, Passport.",
            "Aircraft Documents: Airworthiness, Radio, Registration, ATO, SPC, Weight & Balance, Noise certificate, Insurance. + Technical Log."
        ],
        "correct": 0
    },
    {
        "question": "49. What procedure should be followed in the event of a radio failure during a cross-country flight?",
        "options": [
            "Check volume and correct frequency.",
            "Change comms 1 to 2.",
            "Check headset and connections.",
            "Set transponder to 7700 and transmit blind."
        ],
        "correct": 0
    },
    {
        "question": "50. What Navigation equipment must be carried on all VFR navigation flights?",
        "options": [
            "Topographical Charts for the whole route.",
            "Suitable pens or pencils.",
            "Suitable chronometer.",
            "Means of measuring distance and EFTA logs."
        ],
        "correct": 0
    },
    {
        "question": "51. During a 30NM navigational leg, it is found that the aircraft is 4 degrees left of course after 10NM. How much must the heading be changed to arrive directly over the next target waypoint?",
        "options": [
            "6 degrees right."
        ],
        "correct": 0
    },
    {
        "question": "52. What equipment must be carried on board if operating over water, greater than 50NM from shore?",
        "options": [
            "Life Vest, ELT."
        ],
        "correct": 0
    },
    {
        "question": "53. What equipment must be carried on board if operating over water, greater than 100NM from shore?",
        "options": [
            "Raft, Life Vest, ELT."
        ],
        "correct": 0
    },
    {
        "question": "54. What is the squawk code for radio failure in flight?",
        "options": [
            "7600"
        ],
        "correct": 0
    },
    {
        "question": "55. How frequent are METARs issued?",
        "options": [
            "Every one Hour."
        ],
        "correct": 0
    }
];
