const moment = require('moment')
const crypto = require('crypto')
const request = require('request')

const statsmockres = {
    "status": "OK",
    "recordCount": 1,
    "startTimestamp": "2020-01-03T20:05:47.6942785Z",
    "endTimestamp": "2020-01-03T20:05:47.7880369Z",
    "timeTaken": 0.093758399999999992,
    "apiResults": [{
        "sportId": 4,
        "name": "Football",
        "league": {
            "leagueId": 16,
            "name": "College Football",
            "abbreviation": "CFB",
            "displayName": "College Football",
            "season": {
                "season": 2019,
                "name": "2019 CFB Season",
                "isActive": true,
                "eventType": [{
                    "eventTypeId": 2,
                    "name": "Postseason",
                    "events": [{
                        "eventId": 2162373,
                        "bowl": {
                            "bowlId": 13,
                            "name": "Chick-fil-A Peach Bowl",
                            "displayName": "Peach Bowl"
                        },
                        "startDate": [{
                            "year": 2019,
                            "month": 12,
                            "date": 28,
                            "hour": 16,
                            "minute": 0,
                            "full": "2019-12-28T16:00:00",
                            "dateType": "Local"
                        }, {
                            "year": 2019,
                            "month": 12,
                            "date": 28,
                            "hour": 21,
                            "minute": 0,
                            "full": "2019-12-28T21:00:00",
                            "dateType": "UTC"
                        }],
                        "isTba": false,
                        "isDataConfirmed": {
                            "box": true,
                            "pbp": true,
                            "driveChart": true,
                            "score": true,
                            "participationStats": true
                        },
                        "eventStatus": {
                            "eventStatusId": 4,
                            "period": 4,
                            "isActive": false,
                            "name": "Final"
                        },
                        "venue": {
                            "venueId": 15629,
                            "name": "Mercedes-Benz Stadium",
                            "city": "Atlanta",
                            "state": {
                                "stateId": 10,
                                "name": "Georgia",
                                "abbreviation": "GA"
                            },
                            "country": {
                                "countryId": 1,
                                "name": "United States",
                                "abbreviation": "USA"
                            }
                        },
                        "tvStations": [{
                            "tvStationId": 700,
                            "name": "ESPN",
                            "callLetters": "ESPN",
                            "networkType": {
                                "networkTypeId": 1,
                                "name": "National"
                            },
                            "country": {
                                "countryId": 1,
                                "name": "United States",
                                "abbreviation": "USA"
                            }
                        }],
                        "isConferenceGame": false,
                        "teams": [{
                            "teamId": 3481,
                            "location": "LSU",
                            "nickname": "Tigers",
                            "abbreviation": "LSU",
                            "teamLocationType": {
                                "teamLocationTypeId": 1,
                                "name": "home"
                            },
                            "collegeSubDivision": {
                                "collegeSubDivisionId": 1,
                                "name": "FBS"
                            },
                            "conference": {
                                "conferenceId": 8,
                                "name": "Southeastern",
                                "abbreviation": "SEC"
                            },
                            "division": {
                                "divisionId": 2,
                                "name": "West Division"
                            },
                            "rankings": [{
                                "rankingTypeId": 1,
                                "name": "Associated Press",
                                "rank": 1
                            }, {
                                "rankingTypeId": 2,
                                "name": "USA Today Coaches' Poll",
                                "rank": 1
                            }, {
                                "rankingTypeId": 17,
                                "name": "Playoff Selection Committee Poll",
                                "rank": 1
                            }],
                            "record": {
                                "wins": 14,
                                "losses": 0,
                                "ties": 0,
                                "percentage": "1.000",
                                "conferenceWins": 8,
                                "conferenceLosses": 0
                            },
                            "score": 63,
                            "linescores": [{
                                "period": 1,
                                "score": 21
                            }, {
                                "period": 2,
                                "score": 28
                            }, {
                                "period": 3,
                                "score": 7
                            }, {
                                "period": 4,
                                "score": 7
                            }],
                            "isWinner": true
                        }, {
                            "teamId": 3430,
                            "location": "Oklahoma",
                            "nickname": "Sooners",
                            "abbreviation": "Okla",
                            "teamLocationType": {
                                "teamLocationTypeId": 2,
                                "name": "away"
                            },
                            "collegeSubDivision": {
                                "collegeSubDivisionId": 1,
                                "name": "FBS"
                            },
                            "conference": {
                                "conferenceId": 71,
                                "name": "Big 12",
                                "abbreviation": "Big 12"
                            },
                            "rankings": [{
                                "rankingTypeId": 1,
                                "name": "Associated Press",
                                "rank": 4
                            }, {
                                "rankingTypeId": 2,
                                "name": "USA Today Coaches' Poll",
                                "rank": 4
                            }, {
                                "rankingTypeId": 17,
                                "name": "Playoff Selection Committee Poll",
                                "rank": 4
                            }],
                            "record": {
                                "wins": 12,
                                "losses": 2,
                                "ties": 0,
                                "percentage": ".857",
                                "conferenceWins": 8,
                                "conferenceLosses": 1
                            },
                            "score": 28,
                            "linescores": [{
                                "period": 1,
                                "score": 7
                            }, {
                                "period": 2,
                                "score": 7
                            }, {
                                "period": 3,
                                "score": 7
                            }, {
                                "period": 4,
                                "score": 7
                            }],
                            "isWinner": false
                        }],
                        "week": 18,
                        "isNeutralSite": true,
                        "coverageLevel": {
                            "coverageLevelId": 11,
                            "details": "STATS Feed (in-progress box/pbp data)",
                            "name": "Level 2"
                        },
                        "boxscores": [{
                            "teamId": 3481,
                            "teamStats": {
                                "firstDowns": {
                                    "total": 31,
                                    "rushing": 10,
                                    "passing": 20,
                                    "penalty": 1
                                },
                                "thirdDownEfficiency": {
                                    "made": 7,
                                    "attempts": 11,
                                    "percentage": "63.6"
                                },
                                "fourthDownEfficiency": {
                                    "made": 1,
                                    "attempts": 1,
                                    "percentage": "100"
                                },
                                "gameTotals": {
                                    "plays": 74,
                                    "netYards": 692,
                                    "average": "9.4"
                                },
                                "rushing": {
                                    "attempts": 32,
                                    "yards": 160,
                                    "average": "5.0"
                                },
                                "passing": {
                                    "completions": 32,
                                    "attempts": 42,
                                    "interceptions": 0,
                                    "yards": 532,
                                    "yardsPerAttempt": "12.67",
                                    "sacked": 1,
                                    "sackedYardsLost": 5,
                                    "yardsPerGame": null
                                },
                                "punting": {
                                    "punts": 1,
                                    "yards": 34,
                                    "average": "34.0"
                                },
                                "returnTotals": {
                                    "yards": 20
                                },
                                "puntReturning": {
                                    "returns": 0,
                                    "yards": 0
                                },
                                "kickReturning": {
                                    "returns": 1,
                                    "yards": 20
                                },
                                "interceptions": {
                                    "number": 1,
                                    "yards": 0
                                },
                                "penalties": {
                                    "number": 4,
                                    "yards": 49
                                },
                                "ownFumbles": {
                                    "number": 2,
                                    "lost": 0
                                },
                                "timeOfPossession": {
                                    "minutes": 32,
                                    "seconds": 58
                                }
                            },
                            "playerStats": {
                                "rushingStats": [{
                                    "player": {
                                        "playerId": 1109986,
                                        "firstName": "Chris",
                                        "lastName": "Curry",
                                        "uniform": "24"
                                    },
                                    "attempts": 16,
                                    "yards": 90,
                                    "yardsPerAttempt": "5.6",
                                    "long": 20,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }, {
                                    "player": {
                                        "playerId": 1161729,
                                        "firstName": "Tyrion",
                                        "lastName": "Davis-Price",
                                        "uniform": "3"
                                    },
                                    "attempts": 4,
                                    "yards": 25,
                                    "yardsPerAttempt": "6.3",
                                    "long": 8,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }, {
                                    "player": {
                                        "playerId": 878785,
                                        "firstName": "Joe",
                                        "lastName": "Burrow",
                                        "uniform": "9"
                                    },
                                    "attempts": 5,
                                    "yards": 21,
                                    "yardsPerAttempt": "4.2",
                                    "long": 12,
                                    "isLongTouchdown": false,
                                    "touchdowns": 1
                                }, {
                                    "player": {
                                        "playerId": 976650,
                                        "firstName": "Clyde",
                                        "lastName": "Edwards-Helaire",
                                        "uniform": "22"
                                    },
                                    "attempts": 2,
                                    "yards": 14,
                                    "yardsPerAttempt": "7.0",
                                    "long": 14,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }, {
                                    "player": {
                                        "playerId": 1161730,
                                        "firstName": "John",
                                        "lastName": "Emery Jr.",
                                        "uniform": "4"
                                    },
                                    "attempts": 3,
                                    "yards": 6,
                                    "yardsPerAttempt": "2.0",
                                    "long": 6,
                                    "isLongTouchdown": true,
                                    "touchdowns": 1
                                }, {
                                    "player": {
                                        "playerId": 1109979,
                                        "firstName": "Ja'Marr",
                                        "lastName": "Chase",
                                        "uniform": "1"
                                    },
                                    "attempts": 1,
                                    "yards": 5,
                                    "yardsPerAttempt": "5.0",
                                    "long": 5,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }],
                                "passingStats": [{
                                    "player": {
                                        "playerId": 878785,
                                        "firstName": "Joe",
                                        "lastName": "Burrow",
                                        "uniform": "9"
                                    },
                                    "completions": 29,
                                    "attempts": 39,
                                    "interceptions": 0,
                                    "yards": 493,
                                    "yardsPerAttempt": "12.64",
                                    "sacked": 1,
                                    "sackedYardsLost": 5,
                                    "long": 62,
                                    "isLongTouchdown": true,
                                    "touchdowns": 7,
                                    "rating": 239.8
                                }, {
                                    "player": {
                                        "playerId": 976644,
                                        "firstName": "Myles",
                                        "lastName": "Brennan",
                                        "uniform": "15"
                                    },
                                    "completions": 3,
                                    "attempts": 3,
                                    "interceptions": 0,
                                    "yards": 39,
                                    "yardsPerAttempt": "13.00",
                                    "sacked": 0,
                                    "sackedYardsLost": 0,
                                    "long": 17,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0,
                                    "rating": 209.2
                                }],
                                "receivingStats": [{
                                    "player": {
                                        "playerId": 1069535,
                                        "firstName": "Justin",
                                        "lastName": "Jefferson",
                                        "uniform": "2"
                                    },
                                    "receptions": 14,
                                    "yards": 227,
                                    "long": 42,
                                    "isLongTouchdown": true,
                                    "touchdowns": 4
                                }, {
                                    "player": {
                                        "playerId": 1109285,
                                        "firstName": "Terrace",
                                        "lastName": "Marshall Jr.",
                                        "uniform": "6"
                                    },
                                    "receptions": 6,
                                    "yards": 80,
                                    "long": 32,
                                    "isLongTouchdown": false,
                                    "touchdowns": 2
                                }, {
                                    "player": {
                                        "playerId": 920813,
                                        "firstName": "Thaddeus",
                                        "lastName": "Moss",
                                        "uniform": "81"
                                    },
                                    "receptions": 4,
                                    "yards": 99,
                                    "long": 62,
                                    "isLongTouchdown": true,
                                    "touchdowns": 1
                                }, {
                                    "player": {
                                        "playerId": 1109979,
                                        "firstName": "Ja'Marr",
                                        "lastName": "Chase",
                                        "uniform": "1"
                                    },
                                    "receptions": 2,
                                    "yards": 61,
                                    "long": 39,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }, {
                                    "player": {
                                        "playerId": 865558,
                                        "firstName": "Derrick",
                                        "lastName": "Dillon",
                                        "uniform": "19"
                                    },
                                    "receptions": 2,
                                    "yards": 22,
                                    "long": 12,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }, {
                                    "player": {
                                        "playerId": 976658,
                                        "firstName": "Racey",
                                        "lastName": "McMath",
                                        "uniform": "17"
                                    },
                                    "receptions": 1,
                                    "yards": 17,
                                    "long": 17,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }, {
                                    "player": {
                                        "playerId": 1109986,
                                        "firstName": "Chris",
                                        "lastName": "Curry",
                                        "uniform": "24"
                                    },
                                    "receptions": 1,
                                    "yards": 9,
                                    "long": 9,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }, {
                                    "player": {
                                        "playerId": 910808,
                                        "firstName": "Stephen",
                                        "lastName": "Sullivan",
                                        "uniform": "10"
                                    },
                                    "receptions": 1,
                                    "yards": 9,
                                    "long": 9,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }, {
                                    "player": {
                                        "playerId": 976645,
                                        "firstName": "Tory",
                                        "lastName": "Carter",
                                        "uniform": "44"
                                    },
                                    "receptions": 1,
                                    "yards": 8,
                                    "long": 8,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }],
                                "puntingStats": [{
                                    "player": {
                                        "playerId": 910781,
                                        "firstName": "Zach",
                                        "lastName": "Von Rosenberg",
                                        "uniform": "38"
                                    },
                                    "punts": 1,
                                    "yards": 34,
                                    "long": 34,
                                    "average": "34.0"
                                }],
                                "kickReturnStats": [{
                                    "player": {
                                        "playerId": 976657,
                                        "firstName": "Jontre",
                                        "lastName": "Kirklin",
                                        "uniform": "13"
                                    },
                                    "returns": 1,
                                    "yards": 20,
                                    "long": 20,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }],
                                "puntReturnStats": [],
                                "defenseStats": [{
                                    "player": {
                                        "playerId": 976660,
                                        "firstName": "Jacob",
                                        "lastName": "Phillips",
                                        "uniform": "6"
                                    },
                                    "tackles": 6,
                                    "assists": 2,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 976648,
                                        "firstName": "K'Lavon",
                                        "lastName": "Chaisson",
                                        "uniform": "18"
                                    },
                                    "tackles": 6,
                                    "assists": 0,
                                    "sacks": 2.0,
                                    "sackYards": 12.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 976661,
                                        "firstName": "Patrick",
                                        "lastName": "Queen",
                                        "uniform": "8"
                                    },
                                    "tackles": 3,
                                    "assists": 5,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 976665,
                                        "firstName": "Kary",
                                        "lastName": "Vincent Jr.",
                                        "uniform": "5"
                                    },
                                    "tackles": 4,
                                    "assists": 0,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 1,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 976267,
                                        "firstName": "JaCoby",
                                        "lastName": "Stevens",
                                        "uniform": "3"
                                    },
                                    "tackles": 2,
                                    "assists": 1,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 1,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 976282,
                                        "firstName": "Grant",
                                        "lastName": "Delpit",
                                        "uniform": "7"
                                    },
                                    "tackles": 1,
                                    "assists": 2,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 1,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 910824,
                                        "firstName": "Cameron",
                                        "lastName": "Lewis",
                                        "uniform": "31"
                                    },
                                    "tackles": 2,
                                    "assists": 1,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 1161722,
                                        "firstName": "Derek",
                                        "lastName": "Stingley Jr.",
                                        "uniform": "24"
                                    },
                                    "tackles": 1,
                                    "assists": 1,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 910821,
                                        "firstName": "Kristian",
                                        "lastName": "Fulton",
                                        "uniform": "1"
                                    },
                                    "tackles": 1,
                                    "assists": 0,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 1,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 910823,
                                        "firstName": "Rashard",
                                        "lastName": "Lawrence",
                                        "uniform": "90"
                                    },
                                    "tackles": 0,
                                    "assists": 2,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 1161746,
                                        "firstName": "Jay",
                                        "lastName": "Ward",
                                        "uniform": "16"
                                    },
                                    "tackles": 0,
                                    "assists": 0,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 2,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 1129411,
                                        "firstName": "Avery",
                                        "lastName": "Atkins",
                                        "uniform": "32"
                                    },
                                    "tackles": 1,
                                    "assists": 0,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 1109982,
                                        "firstName": "Damone",
                                        "lastName": "Clark",
                                        "uniform": "35"
                                    },
                                    "tackles": 1,
                                    "assists": 0,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 976652,
                                        "firstName": "Neil",
                                        "lastName": "Farrell Jr.",
                                        "uniform": "92"
                                    },
                                    "tackles": 1,
                                    "assists": 0,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 1161734,
                                        "firstName": "Mo",
                                        "lastName": "Hampton Jr.",
                                        "uniform": "14"
                                    },
                                    "tackles": 1,
                                    "assists": 0,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 1161724,
                                        "firstName": "Siaki",
                                        "lastName": "Ika",
                                        "uniform": "62"
                                    },
                                    "tackles": 1,
                                    "assists": 0,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 910949,
                                        "firstName": "Eric",
                                        "lastName": "Monroe",
                                        "uniform": "11"
                                    },
                                    "tackles": 1,
                                    "assists": 0,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 1161732,
                                        "firstName": "Cordale",
                                        "lastName": "Flott",
                                        "uniform": "25"
                                    },
                                    "tackles": 0,
                                    "assists": 1,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 910948,
                                        "firstName": "Glen",
                                        "lastName": "Logan",
                                        "uniform": "97"
                                    },
                                    "tackles": 0,
                                    "assists": 1,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }],
                                "interceptionStats": [{
                                    "player": {
                                        "playerId": 976665,
                                        "firstName": "Kary",
                                        "lastName": "Vincent Jr.",
                                        "uniform": "5"
                                    },
                                    "number": 1,
                                    "yards": 0,
                                    "long": 0,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }],
                                "ownFumbleStats": [{
                                    "player": {
                                        "playerId": 878785,
                                        "firstName": "Joe",
                                        "lastName": "Burrow",
                                        "uniform": "9"
                                    },
                                    "total": 1,
                                    "totalLost": 0
                                }, {
                                    "player": {
                                        "playerId": 1109986,
                                        "firstName": "Chris",
                                        "lastName": "Curry",
                                        "uniform": "24"
                                    },
                                    "total": 1,
                                    "totalLost": 0
                                }],
                                "fieldGoalStats": [{
                                    "player": {
                                        "playerId": 1161747,
                                        "firstName": "Cade",
                                        "lastName": "York",
                                        "uniform": "36"
                                    },
                                    "made": 0,
                                    "attempts": 1,
                                    "long": 0,
                                    "blocked": 0,
                                    "madeDetails": [],
                                    "missedDetails": [{
                                        "distance": 46,
                                        "isBlocked": false
                                    }]
                                }],
                                "patStats": [{
                                    "player": {
                                        "playerId": 1161747,
                                        "firstName": "Cade",
                                        "lastName": "York",
                                        "uniform": "36"
                                    },
                                    "made": 9,
                                    "attempts": 9,
                                    "blocked": 0
                                }]
                            }
                        }, {
                            "teamId": 3430,
                            "teamStats": {
                                "firstDowns": {
                                    "total": 16,
                                    "rushing": 5,
                                    "passing": 9,
                                    "penalty": 2
                                },
                                "thirdDownEfficiency": {
                                    "made": 5,
                                    "attempts": 13,
                                    "percentage": "38.5"
                                },
                                "fourthDownEfficiency": {
                                    "made": 2,
                                    "attempts": 3,
                                    "percentage": "66.7"
                                },
                                "gameTotals": {
                                    "plays": 62,
                                    "netYards": 322,
                                    "average": "5.2"
                                },
                                "rushing": {
                                    "attempts": 28,
                                    "yards": 97,
                                    "average": "3.5"
                                },
                                "passing": {
                                    "completions": 16,
                                    "attempts": 34,
                                    "interceptions": 1,
                                    "yards": 225,
                                    "yardsPerAttempt": "6.62",
                                    "sacked": 2,
                                    "sackedYardsLost": 12,
                                    "yardsPerGame": null
                                },
                                "punting": {
                                    "punts": 5,
                                    "yards": 219,
                                    "average": "43.8"
                                },
                                "returnTotals": {
                                    "yards": 33
                                },
                                "puntReturning": {
                                    "returns": 0,
                                    "yards": 0
                                },
                                "kickReturning": {
                                    "returns": 1,
                                    "yards": 33
                                },
                                "interceptions": {
                                    "number": 0,
                                    "yards": 0
                                },
                                "penalties": {
                                    "number": 8,
                                    "yards": 62
                                },
                                "ownFumbles": {
                                    "number": 0,
                                    "lost": 0
                                },
                                "timeOfPossession": {
                                    "minutes": 27,
                                    "seconds": 2
                                }
                            },
                            "playerStats": {
                                "rushingStats": [{
                                    "player": {
                                        "playerId": 913271,
                                        "firstName": "Jalen",
                                        "lastName": "Hurts",
                                        "uniform": "1"
                                    },
                                    "attempts": 14,
                                    "yards": 43,
                                    "yardsPerAttempt": "3.1",
                                    "long": 12,
                                    "isLongTouchdown": true,
                                    "touchdowns": 2
                                }, {
                                    "player": {
                                        "playerId": 1061999,
                                        "firstName": "Kennedy",
                                        "lastName": "Brooks",
                                        "uniform": "26"
                                    },
                                    "attempts": 10,
                                    "yards": 35,
                                    "yardsPerAttempt": "3.5",
                                    "long": 8,
                                    "isLongTouchdown": false,
                                    "touchdowns": 1
                                }, {
                                    "player": {
                                        "playerId": 976225,
                                        "firstName": "Jeremiah",
                                        "lastName": "Hall",
                                        "uniform": "27"
                                    },
                                    "attempts": 1,
                                    "yards": 8,
                                    "yardsPerAttempt": "8.0",
                                    "long": 8,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }, {
                                    "player": {
                                        "playerId": 1174752,
                                        "firstName": "Spencer",
                                        "lastName": "Rattler",
                                        "uniform": "7"
                                    },
                                    "attempts": 1,
                                    "yards": 8,
                                    "yardsPerAttempt": "8.0",
                                    "long": 8,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }, {
                                    "player": {
                                        "playerId": 1107843,
                                        "firstName": "T.J.",
                                        "lastName": "Pledger",
                                        "uniform": "22"
                                    },
                                    "attempts": 2,
                                    "yards": 3,
                                    "yardsPerAttempt": "1.5",
                                    "long": 2,
                                    "isLongTouchdown": false,
                                    "touchdowns": 1
                                }],
                                "passingStats": [{
                                    "player": {
                                        "playerId": 913271,
                                        "firstName": "Jalen",
                                        "lastName": "Hurts",
                                        "uniform": "1"
                                    },
                                    "completions": 15,
                                    "attempts": 31,
                                    "interceptions": 1,
                                    "yards": 217,
                                    "yardsPerAttempt": "7.00",
                                    "sacked": 2,
                                    "sackedYardsLost": 12,
                                    "long": 51,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0,
                                    "rating": 100.7
                                }, {
                                    "player": {
                                        "playerId": 1174752,
                                        "firstName": "Spencer",
                                        "lastName": "Rattler",
                                        "uniform": "7"
                                    },
                                    "completions": 1,
                                    "attempts": 3,
                                    "interceptions": 0,
                                    "yards": 8,
                                    "yardsPerAttempt": "2.67",
                                    "sacked": 0,
                                    "sackedYardsLost": 0,
                                    "long": 8,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0,
                                    "rating": 55.7
                                }],
                                "receivingStats": [{
                                    "player": {
                                        "playerId": 1062020,
                                        "firstName": "CeeDee",
                                        "lastName": "Lamb",
                                        "uniform": "2"
                                    },
                                    "receptions": 4,
                                    "yards": 119,
                                    "long": 51,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }, {
                                    "player": {
                                        "playerId": 1162603,
                                        "firstName": "Jadon",
                                        "lastName": "Haselwood",
                                        "uniform": "11"
                                    },
                                    "receptions": 3,
                                    "yards": 25,
                                    "long": 11,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }, {
                                    "player": {
                                        "playerId": 1125599,
                                        "firstName": "Drake",
                                        "lastName": "Stoops",
                                        "uniform": "12"
                                    },
                                    "receptions": 2,
                                    "yards": 28,
                                    "long": 19,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }, {
                                    "player": {
                                        "playerId": 1162602,
                                        "firstName": "Theo",
                                        "lastName": "Wease",
                                        "uniform": "10"
                                    },
                                    "receptions": 1,
                                    "yards": 21,
                                    "long": 21,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }, {
                                    "player": {
                                        "playerId": 1162606,
                                        "firstName": "Austin",
                                        "lastName": "Stogner",
                                        "uniform": "18"
                                    },
                                    "receptions": 1,
                                    "yards": 12,
                                    "long": 12,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }, {
                                    "player": {
                                        "playerId": 1062033,
                                        "firstName": "Charleston",
                                        "lastName": "Rambo",
                                        "uniform": "14"
                                    },
                                    "receptions": 1,
                                    "yards": 9,
                                    "long": 9,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }, {
                                    "player": {
                                        "playerId": 976225,
                                        "firstName": "Jeremiah",
                                        "lastName": "Hall",
                                        "uniform": "27"
                                    },
                                    "receptions": 1,
                                    "yards": 5,
                                    "long": 5,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }, {
                                    "player": {
                                        "playerId": 835388,
                                        "firstName": "Nick",
                                        "lastName": "Basquine",
                                        "uniform": "83"
                                    },
                                    "receptions": 1,
                                    "yards": 3,
                                    "long": 3,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }, {
                                    "player": {
                                        "playerId": 1125589,
                                        "firstName": "Brayden",
                                        "lastName": "Willis",
                                        "uniform": "81"
                                    },
                                    "receptions": 1,
                                    "yards": 3,
                                    "long": 3,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }, {
                                    "player": {
                                        "playerId": 1107843,
                                        "firstName": "T.J.",
                                        "lastName": "Pledger",
                                        "uniform": "22"
                                    },
                                    "receptions": 1,
                                    "yards": 0,
                                    "long": 0,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }],
                                "puntingStats": [{
                                    "player": {
                                        "playerId": 1062029,
                                        "firstName": "Reeves",
                                        "lastName": "Mundschau",
                                        "uniform": "46"
                                    },
                                    "punts": 5,
                                    "yards": 219,
                                    "long": 56,
                                    "average": "43.8"
                                }],
                                "kickReturnStats": [{
                                    "player": {
                                        "playerId": 1062033,
                                        "firstName": "Charleston",
                                        "lastName": "Rambo",
                                        "uniform": "14"
                                    },
                                    "returns": 1,
                                    "yards": 33,
                                    "long": 33,
                                    "isLongTouchdown": false,
                                    "touchdowns": 0
                                }],
                                "puntReturnStats": [],
                                "defenseStats": [{
                                    "player": {
                                        "playerId": 976219,
                                        "firstName": "Justin",
                                        "lastName": "Broiles",
                                        "uniform": "25"
                                    },
                                    "tackles": 6,
                                    "assists": 5,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 1174758,
                                        "firstName": "Woodi",
                                        "lastName": "Washington",
                                        "uniform": "5"
                                    },
                                    "tackles": 4,
                                    "assists": 6,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 923080,
                                        "firstName": "Parnell",
                                        "lastName": "Motley",
                                        "uniform": "11"
                                    },
                                    "tackles": 4,
                                    "assists": 3,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 2,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 976232,
                                        "firstName": "Kenneth",
                                        "lastName": "Murray",
                                        "uniform": "9"
                                    },
                                    "tackles": 4,
                                    "assists": 3,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 1062002,
                                        "firstName": "Tre",
                                        "lastName": "Brown",
                                        "uniform": "6"
                                    },
                                    "tackles": 4,
                                    "assists": 2,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 1107838,
                                        "firstName": "Pat",
                                        "lastName": "Fields",
                                        "uniform": "10"
                                    },
                                    "tackles": 4,
                                    "assists": 2,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 1125590,
                                        "firstName": "DaShaun",
                                        "lastName": "White",
                                        "uniform": "23"
                                    },
                                    "tackles": 4,
                                    "assists": 1,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 1107846,
                                        "firstName": "Jalen",
                                        "lastName": "Redmond",
                                        "uniform": "31"
                                    },
                                    "tackles": 1,
                                    "assists": 3,
                                    "sacks": 1.0,
                                    "sackYards": 5.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 865911,
                                        "firstName": "Neville",
                                        "lastName": "Gallimore",
                                        "uniform": "90"
                                    },
                                    "tackles": 0,
                                    "assists": 3,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 1107847,
                                        "firstName": "Brendan",
                                        "lastName": "Radley-Hiles",
                                        "uniform": "44"
                                    },
                                    "tackles": 2,
                                    "assists": 0,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 1062040,
                                        "firstName": "Isaiah",
                                        "lastName": "Thomas",
                                        "uniform": "95"
                                    },
                                    "tackles": 2,
                                    "assists": 0,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 865928,
                                        "firstName": "Marquise",
                                        "lastName": "Overton",
                                        "uniform": "97"
                                    },
                                    "tackles": 1,
                                    "assists": 1,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 1125630,
                                        "firstName": "Brian",
                                        "lastName": "Asamoah",
                                        "uniform": "24"
                                    },
                                    "tackles": 0,
                                    "assists": 2,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 1162636,
                                        "firstName": "LaRon",
                                        "lastName": "Stokes",
                                        "uniform": "96"
                                    },
                                    "tackles": 0,
                                    "assists": 2,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 923073,
                                        "firstName": "Caleb",
                                        "lastName": "Kelly",
                                        "uniform": "19"
                                    },
                                    "tackles": 0,
                                    "assists": 1,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 1062033,
                                        "firstName": "Charleston",
                                        "lastName": "Rambo",
                                        "uniform": "14"
                                    },
                                    "tackles": 0,
                                    "assists": 1,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }, {
                                    "player": {
                                        "playerId": 1174757,
                                        "firstName": "David",
                                        "lastName": "Ugwoegbu",
                                        "uniform": "34"
                                    },
                                    "tackles": 0,
                                    "assists": 1,
                                    "sacks": 0.0,
                                    "sackYards": 0.0,
                                    "passesDefensed": 0,
                                    "safeties": 0
                                }],
                                "interceptionStats": [],
                                "ownFumbleStats": [],
                                "fieldGoalStats": [],
                                "patStats": [{
                                    "player": {
                                        "playerId": 1125621,
                                        "firstName": "Gabe",
                                        "lastName": "Brkic",
                                        "uniform": "47"
                                    },
                                    "made": 4,
                                    "attempts": 4,
                                    "blocked": 0
                                }]
                            }
                        }],
                        "gameDetail": {
                            "attendance": "78347"
                        },
                        "scoringSummaries": [{
                            "period": 1,
                            "scores": [{
                                "time": {
                                    "minutes": 12,
                                    "seconds": 3
                                },
                                "teamId": 3481,
                                "scoreType": {
                                    "scoreTypeId": 2,
                                    "name": "Passing TD"
                                },
                                "scoringPlayerId": 1069535,
                                "passerId": 878785,
                                "pat": {
                                    "patTypeId": 14,
                                    "points": 1,
                                    "isGood": true,
                                    "patPlayerId": 1161747
                                },
                                "distance": 19,
                                "summaryText": "Justin Jefferson 19 yd pass from Joe Burrow (Cade York kick)",
                                "drive": {
                                    "plays": 3,
                                    "yards": 42,
                                    "minutes": 0,
                                    "seconds": 52
                                },
                                "currentScore": {
                                    "leaderTeamId": 3481,
                                    "leadingScore": 7,
                                    "trailingScore": 0
                                }
                            }, {
                                "time": {
                                    "minutes": 7,
                                    "seconds": 34
                                },
                                "teamId": 3430,
                                "scoreType": {
                                    "scoreTypeId": 1,
                                    "name": "Rushing TD"
                                },
                                "scoringPlayerId": 1061999,
                                "pat": {
                                    "patTypeId": 14,
                                    "points": 1,
                                    "isGood": true,
                                    "patPlayerId": 1125621
                                },
                                "distance": 3,
                                "summaryText": "Kennedy Brooks 3 yd run (Gabe Brkic kick)",
                                "drive": {
                                    "plays": 5,
                                    "yards": 69,
                                    "minutes": 2,
                                    "seconds": 21
                                },
                                "currentScore": {
                                    "leadingScore": 7,
                                    "trailingScore": 7
                                }
                            }, {
                                "time": {
                                    "minutes": 4,
                                    "seconds": 24
                                },
                                "teamId": 3481,
                                "scoreType": {
                                    "scoreTypeId": 2,
                                    "name": "Passing TD"
                                },
                                "scoringPlayerId": 1109285,
                                "passerId": 878785,
                                "pat": {
                                    "patTypeId": 14,
                                    "points": 1,
                                    "isGood": true,
                                    "patPlayerId": 1161747
                                },
                                "distance": 8,
                                "summaryText": "Terrace Marshall Jr. 8 yd pass from Joe Burrow (Cade York kick)",
                                "drive": {
                                    "plays": 9,
                                    "yards": 75,
                                    "minutes": 2,
                                    "seconds": 59
                                },
                                "currentScore": {
                                    "leaderTeamId": 3481,
                                    "leadingScore": 14,
                                    "trailingScore": 7
                                }
                            }, {
                                "time": {
                                    "minutes": 1,
                                    "seconds": 16
                                },
                                "teamId": 3481,
                                "scoreType": {
                                    "scoreTypeId": 2,
                                    "name": "Passing TD"
                                },
                                "scoringPlayerId": 1069535,
                                "passerId": 878785,
                                "pat": {
                                    "patTypeId": 14,
                                    "points": 1,
                                    "isGood": true,
                                    "patPlayerId": 1161747
                                },
                                "distance": 35,
                                "summaryText": "Justin Jefferson 35 yd pass from Joe Burrow (Cade York kick)",
                                "drive": {
                                    "plays": 6,
                                    "yards": 86,
                                    "minutes": 2,
                                    "seconds": 31
                                },
                                "currentScore": {
                                    "leaderTeamId": 3481,
                                    "leadingScore": 21,
                                    "trailingScore": 7
                                }
                            }]
                        }, {
                            "period": 2,
                            "scores": [{
                                "time": {
                                    "minutes": 12,
                                    "seconds": 13
                                },
                                "teamId": 3481,
                                "scoreType": {
                                    "scoreTypeId": 2,
                                    "name": "Passing TD"
                                },
                                "scoringPlayerId": 1069535,
                                "passerId": 878785,
                                "pat": {
                                    "patTypeId": 14,
                                    "points": 1,
                                    "isGood": true,
                                    "patPlayerId": 1161747
                                },
                                "distance": 42,
                                "summaryText": "Justin Jefferson 42 yd pass from Joe Burrow (Cade York kick)",
                                "drive": {
                                    "plays": 6,
                                    "yards": 80,
                                    "minutes": 2,
                                    "seconds": 2
                                },
                                "currentScore": {
                                    "leaderTeamId": 3481,
                                    "leadingScore": 28,
                                    "trailingScore": 7
                                }
                            }, {
                                "time": {
                                    "minutes": 9,
                                    "seconds": 17
                                },
                                "teamId": 3481,
                                "scoreType": {
                                    "scoreTypeId": 2,
                                    "name": "Passing TD"
                                },
                                "scoringPlayerId": 1069535,
                                "passerId": 878785,
                                "pat": {
                                    "patTypeId": 14,
                                    "points": 1,
                                    "isGood": true,
                                    "patPlayerId": 1161747
                                },
                                "distance": 30,
                                "summaryText": "Justin Jefferson 30 yd pass from Joe Burrow (Cade York kick)",
                                "drive": {
                                    "plays": 6,
                                    "yards": 55,
                                    "minutes": 2,
                                    "seconds": 46
                                },
                                "currentScore": {
                                    "leaderTeamId": 3481,
                                    "leadingScore": 35,
                                    "trailingScore": 7
                                }
                            }, {
                                "time": {
                                    "minutes": 4,
                                    "seconds": 45
                                },
                                "teamId": 3430,
                                "scoreType": {
                                    "scoreTypeId": 1,
                                    "name": "Rushing TD"
                                },
                                "scoringPlayerId": 913271,
                                "pat": {
                                    "patTypeId": 14,
                                    "points": 1,
                                    "isGood": true,
                                    "patPlayerId": 1125621
                                },
                                "distance": 2,
                                "summaryText": "Jalen Hurts 2 yd run (Gabe Brkic kick)",
                                "drive": {
                                    "plays": 10,
                                    "yards": 75,
                                    "minutes": 4,
                                    "seconds": 32
                                },
                                "currentScore": {
                                    "leaderTeamId": 3481,
                                    "leadingScore": 35,
                                    "trailingScore": 14
                                }
                            }, {
                                "time": {
                                    "minutes": 4,
                                    "seconds": 18
                                },
                                "teamId": 3481,
                                "scoreType": {
                                    "scoreTypeId": 2,
                                    "name": "Passing TD"
                                },
                                "scoringPlayerId": 920813,
                                "passerId": 878785,
                                "pat": {
                                    "patTypeId": 14,
                                    "points": 1,
                                    "isGood": true,
                                    "patPlayerId": 1161747
                                },
                                "distance": 62,
                                "summaryText": "Thaddeus Moss 62 yd pass from Joe Burrow (Cade York kick)",
                                "drive": {
                                    "plays": 2,
                                    "yards": 75,
                                    "minutes": 0,
                                    "seconds": 27
                                },
                                "currentScore": {
                                    "leaderTeamId": 3481,
                                    "leadingScore": 42,
                                    "trailingScore": 14
                                }
                            }, {
                                "time": {
                                    "minutes": 0,
                                    "seconds": 50
                                },
                                "teamId": 3481,
                                "scoreType": {
                                    "scoreTypeId": 2,
                                    "name": "Passing TD"
                                },
                                "scoringPlayerId": 1109285,
                                "passerId": 878785,
                                "pat": {
                                    "patTypeId": 14,
                                    "points": 1,
                                    "isGood": true,
                                    "patPlayerId": 1161747
                                },
                                "distance": 2,
                                "summaryText": "Terrace Marshall Jr. 2 yd pass from Joe Burrow (Cade York kick)",
                                "drive": {
                                    "plays": 5,
                                    "yards": 63,
                                    "minutes": 2,
                                    "seconds": 4
                                },
                                "currentScore": {
                                    "leaderTeamId": 3481,
                                    "leadingScore": 49,
                                    "trailingScore": 14
                                }
                            }]
                        }, {
                            "period": 3,
                            "scores": [{
                                "time": {
                                    "minutes": 10,
                                    "seconds": 11
                                },
                                "teamId": 3481,
                                "scoreType": {
                                    "scoreTypeId": 1,
                                    "name": "Rushing TD"
                                },
                                "scoringPlayerId": 878785,
                                "pat": {
                                    "patTypeId": 14,
                                    "points": 1,
                                    "isGood": true,
                                    "patPlayerId": 1161747
                                },
                                "distance": 2,
                                "summaryText": "Joe Burrow 2 yd run (Cade York kick)",
                                "drive": {
                                    "plays": 13,
                                    "yards": 74,
                                    "minutes": 4,
                                    "seconds": 40
                                },
                                "currentScore": {
                                    "leaderTeamId": 3481,
                                    "leadingScore": 56,
                                    "trailingScore": 14
                                }
                            }, {
                                "time": {
                                    "minutes": 4,
                                    "seconds": 19
                                },
                                "teamId": 3430,
                                "scoreType": {
                                    "scoreTypeId": 1,
                                    "name": "Rushing TD"
                                },
                                "scoringPlayerId": 913271,
                                "pat": {
                                    "patTypeId": 14,
                                    "points": 1,
                                    "isGood": true,
                                    "patPlayerId": 1125621
                                },
                                "distance": 12,
                                "summaryText": "Jalen Hurts 12 yd run (Gabe Brkic kick)",
                                "drive": {
                                    "plays": 13,
                                    "yards": 75,
                                    "minutes": 5,
                                    "seconds": 52
                                },
                                "currentScore": {
                                    "leaderTeamId": 3481,
                                    "leadingScore": 56,
                                    "trailingScore": 21
                                }
                            }]
                        }, {
                            "period": 4,
                            "scores": [{
                                "time": {
                                    "minutes": 9,
                                    "seconds": 39
                                },
                                "teamId": 3430,
                                "scoreType": {
                                    "scoreTypeId": 1,
                                    "name": "Rushing TD"
                                },
                                "scoringPlayerId": 1107843,
                                "pat": {
                                    "patTypeId": 14,
                                    "points": 1,
                                    "isGood": true,
                                    "patPlayerId": 1125621
                                },
                                "distance": 1,
                                "summaryText": "T.J. Pledger 1 yd run (Gabe Brkic kick)",
                                "drive": {
                                    "plays": 9,
                                    "yards": 71,
                                    "minutes": 4,
                                    "seconds": 27
                                },
                                "currentScore": {
                                    "leaderTeamId": 3481,
                                    "leadingScore": 56,
                                    "trailingScore": 28
                                }
                            }, {
                                "time": {
                                    "minutes": 3,
                                    "seconds": 59
                                },
                                "teamId": 3481,
                                "scoreType": {
                                    "scoreTypeId": 1,
                                    "name": "Rushing TD"
                                },
                                "scoringPlayerId": 1161730,
                                "pat": {
                                    "patTypeId": 14,
                                    "points": 1,
                                    "isGood": true,
                                    "patPlayerId": 1161747
                                },
                                "distance": 6,
                                "summaryText": "John Emery Jr. 6 yd run (Cade York kick)",
                                "drive": {
                                    "plays": 9,
                                    "yards": 75,
                                    "minutes": 5,
                                    "seconds": 40
                                },
                                "currentScore": {
                                    "leaderTeamId": 3481,
                                    "leadingScore": 63,
                                    "trailingScore": 28
                                }
                            }]
                        }],
                        "pbp": [{
                            "playId": 1.0,
                            "period": 1,
                            "time": "15:00",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 0,
                            "homeScoreAfter": 0,
                            "yardLine": "LSU35",
                            "endYardLine": "Okla0",
                            "driveId": 0,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 9,
                                "name": "Touchback"
                            },
                            "playText": "Avery Atkins kicks off to the endzone. Touchback.",
                            "playType": {
                                "playTypeId": 5,
                                "name": "Kickoff"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1129411,
                                    "firstName": "Avery",
                                    "lastName": "Atkins",
                                    "uniform": "32"
                                }
                            }],
                            "direction": "M",
                            "yards": 65
                        }, {
                            "playId": 3.0,
                            "period": 1,
                            "time": "15:00",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 0,
                            "homeScoreAfter": 0,
                            "yardLine": "Okla25",
                            "endYardLine": "Okla19",
                            "driveId": 1,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts sacked at Okla19 for a loss of 6 yards by K'Lavon Chaisson.",
                            "playType": {
                                "playTypeId": 3,
                                "name": "Sack"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976648,
                                    "firstName": "K'Lavon",
                                    "lastName": "Chaisson",
                                    "uniform": "18"
                                }
                            }],
                            "direction": "M",
                            "yards": -6
                        }, {
                            "playId": 4.0,
                            "period": 1,
                            "time": "14:25",
                            "down": "2",
                            "distance": "16",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 0,
                            "homeScoreAfter": 0,
                            "yardLine": "Okla19",
                            "endYardLine": "Okla18",
                            "driveId": 1,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 9,
                                "name": "Off Right Tackle"
                            },
                            "playText": "Kennedy Brooks rush to the right for a loss of 1 yard to the Okla18. Tackled by Patrick Queen and Grant Delpit.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1061999,
                                    "firstName": "Kennedy",
                                    "lastName": "Brooks",
                                    "uniform": "26"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976661,
                                    "firstName": "Patrick",
                                    "lastName": "Queen",
                                    "uniform": "8"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976282,
                                    "firstName": "Grant",
                                    "lastName": "Delpit",
                                    "uniform": "7"
                                }
                            }],
                            "direction": "R",
                            "yards": -1
                        }, {
                            "playId": 5.0,
                            "period": 1,
                            "time": "13:36",
                            "down": "3",
                            "distance": "17",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 0,
                            "homeScoreAfter": 0,
                            "yardLine": "Okla18",
                            "endYardLine": "Okla19",
                            "driveId": 1,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 7,
                                "name": "Middle"
                            },
                            "playText": "Kennedy Brooks rush to the middle for 1 yard to the Okla19. Tackled by JaCoby Stevens and Patrick Queen.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1061999,
                                    "firstName": "Kennedy",
                                    "lastName": "Brooks",
                                    "uniform": "26"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976267,
                                    "firstName": "JaCoby",
                                    "lastName": "Stevens",
                                    "uniform": "3"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976661,
                                    "firstName": "Patrick",
                                    "lastName": "Queen",
                                    "uniform": "8"
                                }
                            }],
                            "direction": "M",
                            "yards": 1
                        }, {
                            "playId": 6.0,
                            "period": 1,
                            "time": "13:03",
                            "down": "4",
                            "distance": "16",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 0,
                            "homeScoreAfter": 0,
                            "yardLine": "Okla19",
                            "endYardLine": "Okla42",
                            "driveId": 1,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 6,
                                "name": "Out of Bounds"
                            },
                            "playText": "Reeves Mundschau punts for 23 yards to Okla42. No return.",
                            "playType": {
                                "playTypeId": 7,
                                "name": "Punt"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062029,
                                    "firstName": "Reeves",
                                    "lastName": "Mundschau",
                                    "uniform": "46"
                                }
                            }],
                            "direction": "R",
                            "yards": 0
                        }, {
                            "playId": 8.0,
                            "period": 1,
                            "time": "12:55",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 0,
                            "homeScoreAfter": 0,
                            "yardLine": "Okla42",
                            "endYardLine": "Okla25",
                            "driveId": 2,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the left to Thaddeus Moss for 17 yards to the Okla25. Tackled by Pat Fields.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1107838,
                                    "firstName": "Pat",
                                    "lastName": "Fields",
                                    "uniform": "10"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 920813,
                                    "firstName": "Thaddeus",
                                    "lastName": "Moss",
                                    "uniform": "81"
                                }
                            }],
                            "direction": "L",
                            "yards": 17
                        }, {
                            "playId": 9.0,
                            "period": 1,
                            "time": "12:35",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 0,
                            "homeScoreAfter": 0,
                            "yardLine": "Okla25",
                            "endYardLine": "Okla19",
                            "driveId": 2,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the left to Terrace Marshall Jr. for 6 yards to the Okla19. Tackled by Pat Fields.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1107838,
                                    "firstName": "Pat",
                                    "lastName": "Fields",
                                    "uniform": "10"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109285,
                                    "firstName": "Terrace",
                                    "lastName": "Marshall Jr.",
                                    "uniform": "6"
                                }
                            }],
                            "direction": "L",
                            "yards": 6
                        }, {
                            "playId": 10.0,
                            "period": 1,
                            "time": "12:10",
                            "down": "2",
                            "distance": "4",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 0,
                            "homeScoreAfter": 6,
                            "yardLine": "Okla19",
                            "endYardLine": "Okla0",
                            "driveId": 2,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the middle to Justin Jefferson for 19 yards for a TOUCHDOWN.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1069535,
                                    "firstName": "Justin",
                                    "lastName": "Jefferson",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "M",
                            "yards": 19
                        }, {
                            "playId": 11.0,
                            "period": 1,
                            "time": null,
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 6,
                            "homeScoreAfter": 7,
                            "yardLine": "Okla3",
                            "endYardLine": "Okla3",
                            "driveId": 2,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Cade York extra point is GOOD.",
                            "playType": {
                                "playTypeId": 22,
                                "name": "Made Extra Point"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161747,
                                    "firstName": "Cade",
                                    "lastName": "York",
                                    "uniform": "36"
                                }
                            }],
                            "direction": "M",
                            "yards": 0
                        }, {
                            "playId": 12.0,
                            "period": 1,
                            "time": "12:03",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "LSU35",
                            "endYardLine": "Okla0",
                            "driveId": 2,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 9,
                                "name": "Touchback"
                            },
                            "playText": "Avery Atkins kicks off to the endzone. Touchback.",
                            "playType": {
                                "playTypeId": 5,
                                "name": "Kickoff"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1129411,
                                    "firstName": "Avery",
                                    "lastName": "Atkins",
                                    "uniform": "32"
                                }
                            }],
                            "direction": "L",
                            "yards": 65
                        }, {
                            "playId": 14.0,
                            "period": 1,
                            "time": "12:03",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "Okla25",
                            "endYardLine": "Okla20",
                            "driveId": 3,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "penaltyType": {
                                "penaltyTypeId": 11,
                                "name": "False Start"
                            },
                            "playText": "Penalty: False Start on Sooners (CeeDee Lamb) -5 yards.",
                            "playType": {
                                "playTypeId": 10,
                                "name": "Penalty"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062020,
                                    "firstName": "CeeDee",
                                    "lastName": "Lamb",
                                    "uniform": "2"
                                }
                            }],
                            "direction": null,
                            "yards": -5
                        }, {
                            "playId": 15.0,
                            "period": 1,
                            "time": "12:03",
                            "down": "1",
                            "distance": "15",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "Okla20",
                            "endYardLine": "Okla24",
                            "driveId": 3,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 10,
                                "name": "Off Right End"
                            },
                            "playText": "Kennedy Brooks rush to the right for 4 yards to the Okla24. Tackled by Kary Vincent Jr..",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1061999,
                                    "firstName": "Kennedy",
                                    "lastName": "Brooks",
                                    "uniform": "26"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976665,
                                    "firstName": "Kary",
                                    "lastName": "Vincent Jr.",
                                    "uniform": "5"
                                }
                            }],
                            "direction": "R",
                            "yards": 4
                        }, {
                            "playId": 16.0,
                            "period": 1,
                            "time": "11:30",
                            "down": "2",
                            "distance": "11",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "Okla24",
                            "endYardLine": "Okla24",
                            "driveId": 3,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts incomplete pass to the right intended for Jadon Haselwood.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1162603,
                                    "firstName": "Jadon",
                                    "lastName": "Haselwood",
                                    "uniform": "11"
                                }
                            }],
                            "direction": "R",
                            "yards": 0
                        }, {
                            "playId": 17.0,
                            "period": 1,
                            "time": "11:23",
                            "down": "3",
                            "distance": "11",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "Okla24",
                            "endYardLine": "Okla24",
                            "driveId": 3,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts incomplete pass to the right intended for CeeDee Lamb.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062020,
                                    "firstName": "CeeDee",
                                    "lastName": "Lamb",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "R",
                            "yards": 0
                        }, {
                            "playId": 18.0,
                            "period": 1,
                            "time": "11:17",
                            "down": "4",
                            "distance": "11",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "Okla24",
                            "endYardLine": "LSU27",
                            "driveId": 3,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 10,
                                "name": "Fair Catch"
                            },
                            "playText": "Reeves Mundschau punts for 49 yards to LSU27. No return.",
                            "playType": {
                                "playTypeId": 7,
                                "name": "Punt"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062029,
                                    "firstName": "Reeves",
                                    "lastName": "Mundschau",
                                    "uniform": "46"
                                }
                            }],
                            "direction": "M",
                            "yards": 0
                        }, {
                            "playId": 20.0,
                            "period": 1,
                            "time": "11:09",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "LSU27",
                            "endYardLine": "LSU27",
                            "driveId": 4,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow incomplete pass to the right intended for Terrace Marshall Jr..",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109285,
                                    "firstName": "Terrace",
                                    "lastName": "Marshall Jr.",
                                    "uniform": "6"
                                }
                            }],
                            "direction": "R",
                            "yards": 0
                        }, {
                            "playId": 21.0,
                            "period": 1,
                            "time": "11:03",
                            "down": "2",
                            "distance": "10",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "LSU27",
                            "endYardLine": "LSU34",
                            "driveId": 4,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 7,
                                "name": "Middle"
                            },
                            "playText": "Chris Curry rush to the left for 7 yards to the LSU34. Tackled by Caleb Kelly and Parnell Motley.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109986,
                                    "firstName": "Chris",
                                    "lastName": "Curry",
                                    "uniform": "24"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 923073,
                                    "firstName": "Caleb",
                                    "lastName": "Kelly",
                                    "uniform": "19"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 923080,
                                    "firstName": "Parnell",
                                    "lastName": "Motley",
                                    "uniform": "11"
                                }
                            }],
                            "direction": "L",
                            "yards": 7
                        }, {
                            "playId": 22.0,
                            "period": 1,
                            "time": "10:24",
                            "down": "3",
                            "distance": "3",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "LSU34",
                            "endYardLine": "LSU35",
                            "driveId": 4,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 7,
                                "name": "Middle"
                            },
                            "playText": "Joe Burrow rush to the middle for 1 yard to the LSU35. Tackled by LaRon Stokes and Neville Gallimore.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1162636,
                                    "firstName": "LaRon",
                                    "lastName": "Stokes",
                                    "uniform": "96"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 865911,
                                    "firstName": "Neville",
                                    "lastName": "Gallimore",
                                    "uniform": "90"
                                }
                            }],
                            "direction": "M",
                            "yards": 1
                        }, {
                            "playId": 23.0,
                            "period": 1,
                            "time": "10:04",
                            "down": "4",
                            "distance": "2",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "LSU35",
                            "endYardLine": "Okla31",
                            "driveId": 4,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 6,
                                "name": "Out of Bounds"
                            },
                            "playText": "Zach Von Rosenberg punts for 34 yards to Okla31. No return.",
                            "playType": {
                                "playTypeId": 7,
                                "name": "Punt"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 910781,
                                    "firstName": "Zach",
                                    "lastName": "Von Rosenberg",
                                    "uniform": "38"
                                }
                            }],
                            "direction": "L",
                            "yards": 0
                        }, {
                            "playId": 25.0,
                            "period": 1,
                            "time": "9:55",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "Okla31",
                            "endYardLine": "Okla36",
                            "driveId": 5,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 5,
                                "name": "Off Left Tackle"
                            },
                            "playText": "Jalen Hurts rush to the left for 5 yards to the Okla36. Tackled by Patrick Queen.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976661,
                                    "firstName": "Patrick",
                                    "lastName": "Queen",
                                    "uniform": "8"
                                }
                            }],
                            "direction": "L",
                            "yards": 5
                        }, {
                            "playId": 26.0,
                            "period": 1,
                            "time": "9:15",
                            "down": "2",
                            "distance": "5",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "Okla36",
                            "endYardLine": "Okla48",
                            "driveId": 5,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 5,
                                "name": "Off Left Tackle"
                            },
                            "playText": "Jalen Hurts rush to the left for 12 yards to the Okla48. Tackled by Mo Hampton Jr..",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161734,
                                    "firstName": "Mo",
                                    "lastName": "Hampton Jr.",
                                    "uniform": "14"
                                }
                            }],
                            "direction": "L",
                            "yards": 12
                        }, {
                            "playId": 27.0,
                            "period": 1,
                            "time": "8:45",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "Okla48",
                            "endYardLine": "Okla43",
                            "driveId": 5,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "penaltyType": {
                                "penaltyTypeId": 11,
                                "name": "False Start"
                            },
                            "playText": "Penalty: False Start on Sooners (Creed Humphrey) -5 yards.",
                            "playType": {
                                "playTypeId": 10,
                                "name": "Penalty"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976228,
                                    "firstName": "Creed",
                                    "lastName": "Humphrey",
                                    "uniform": "56"
                                }
                            }],
                            "direction": null,
                            "yards": -5
                        }, {
                            "playId": 28.0,
                            "period": 1,
                            "time": "8:27",
                            "down": "1",
                            "distance": "15",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "Okla43",
                            "endYardLine": "Okla46",
                            "driveId": 5,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts pass to the left to Brayden Willis for 3 yards to the Okla46. Tackled by K'Lavon Chaisson.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976648,
                                    "firstName": "K'Lavon",
                                    "lastName": "Chaisson",
                                    "uniform": "18"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1125589,
                                    "firstName": "Brayden",
                                    "lastName": "Willis",
                                    "uniform": "81"
                                }
                            }],
                            "direction": "L",
                            "yards": 3
                        }, {
                            "playId": 29.0,
                            "period": 1,
                            "time": "8:03",
                            "down": "2",
                            "distance": "12",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 0,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "Okla46",
                            "endYardLine": "LSU3",
                            "driveId": 5,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts pass to the left to CeeDee Lamb for 51 yards to the LSU3. Tackled by JaCoby Stevens.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976267,
                                    "firstName": "JaCoby",
                                    "lastName": "Stevens",
                                    "uniform": "3"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062020,
                                    "firstName": "CeeDee",
                                    "lastName": "Lamb",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "L",
                            "yards": 51
                        }, {
                            "playId": 30.0,
                            "period": 1,
                            "time": "7:41",
                            "down": "1",
                            "distance": "3",
                            "awayScoreBefore": 0,
                            "awayScoreAfter": 6,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "LSU3",
                            "endYardLine": "LSU0",
                            "driveId": 5,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 9,
                                "name": "Off Right Tackle"
                            },
                            "playText": "Kennedy Brooks rush to the middle for 3 yards for a TOUCHDOWN.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1061999,
                                    "firstName": "Kennedy",
                                    "lastName": "Brooks",
                                    "uniform": "26"
                                }
                            }],
                            "direction": "M",
                            "yards": 3
                        }, {
                            "playId": 31.0,
                            "period": 1,
                            "time": null,
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 6,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "LSU3",
                            "endYardLine": "LSU3",
                            "driveId": 5,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Gabe Brkic extra point is GOOD.",
                            "playType": {
                                "playTypeId": 22,
                                "name": "Made Extra Point"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1125621,
                                    "firstName": "Gabe",
                                    "lastName": "Brkic",
                                    "uniform": "47"
                                }
                            }],
                            "direction": "M",
                            "yards": 0
                        }, {
                            "playId": 32.0,
                            "period": 1,
                            "time": "7:34",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "Okla35",
                            "endYardLine": "LSU0",
                            "driveId": 5,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 9,
                                "name": "Touchback"
                            },
                            "playText": "Gabe Brkic kicks off to the endzone. Touchback.",
                            "playType": {
                                "playTypeId": 5,
                                "name": "Kickoff"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1125621,
                                    "firstName": "Gabe",
                                    "lastName": "Brkic",
                                    "uniform": "47"
                                }
                            }],
                            "direction": "M",
                            "yards": 65
                        }, {
                            "playId": 34.0,
                            "period": 1,
                            "time": "7:34",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "LSU25",
                            "endYardLine": "LSU44",
                            "driveId": 6,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the left to Justin Jefferson for 19 yards to the LSU44. Tackled by Parnell Motley.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 923080,
                                    "firstName": "Parnell",
                                    "lastName": "Motley",
                                    "uniform": "11"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1069535,
                                    "firstName": "Justin",
                                    "lastName": "Jefferson",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "L",
                            "yards": 19
                        }, {
                            "playId": 35.0,
                            "period": 1,
                            "time": "7:15",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "LSU44",
                            "endYardLine": "Okla43",
                            "driveId": 6,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the middle to Justin Jefferson for 13 yards to the Okla43. Tackled by Justin Broiles.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976219,
                                    "firstName": "Justin",
                                    "lastName": "Broiles",
                                    "uniform": "25"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1069535,
                                    "firstName": "Justin",
                                    "lastName": "Jefferson",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "M",
                            "yards": 13
                        }, {
                            "playId": 36.0,
                            "period": 1,
                            "time": "6:48",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "Okla43",
                            "endYardLine": "Okla35",
                            "driveId": 6,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the left to Terrace Marshall Jr. for 8 yards to the Okla35. Tackled by Parnell Motley.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 923080,
                                    "firstName": "Parnell",
                                    "lastName": "Motley",
                                    "uniform": "11"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109285,
                                    "firstName": "Terrace",
                                    "lastName": "Marshall Jr.",
                                    "uniform": "6"
                                }
                            }],
                            "direction": "L",
                            "yards": 8
                        }, {
                            "playId": 37.0,
                            "period": 1,
                            "time": "6:15",
                            "down": "2",
                            "distance": "2",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "Okla35",
                            "endYardLine": "Okla30",
                            "driveId": 6,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 9,
                                "name": "Off Right Tackle"
                            },
                            "playText": "Chris Curry rush to the right for 5 yards to the Okla30. Tackled by Kenneth Murray and Tre Brown.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109986,
                                    "firstName": "Chris",
                                    "lastName": "Curry",
                                    "uniform": "24"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976232,
                                    "firstName": "Kenneth",
                                    "lastName": "Murray",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062002,
                                    "firstName": "Tre",
                                    "lastName": "Brown",
                                    "uniform": "6"
                                }
                            }],
                            "direction": "R",
                            "yards": 5
                        }, {
                            "playId": 38.0,
                            "period": 1,
                            "time": "5:48",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "Okla30",
                            "endYardLine": "Okla30",
                            "driveId": 6,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow incomplete pass to the left intended for Stephen Sullivan defensed by Parnell Motley.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 4,
                                "playerInvolvedType": "pass defender",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 923080,
                                    "firstName": "Parnell",
                                    "lastName": "Motley",
                                    "uniform": "11"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 910808,
                                    "firstName": "Stephen",
                                    "lastName": "Sullivan",
                                    "uniform": "10"
                                }
                            }],
                            "direction": "L",
                            "yards": 0
                        }, {
                            "playId": 39.0,
                            "period": 1,
                            "time": "5:41",
                            "down": "2",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "Okla30",
                            "endYardLine": "Okla22",
                            "driveId": 6,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the right to Justin Jefferson for 8 yards to the Okla22. Tackled by Justin Broiles.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976219,
                                    "firstName": "Justin",
                                    "lastName": "Broiles",
                                    "uniform": "25"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1069535,
                                    "firstName": "Justin",
                                    "lastName": "Jefferson",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "R",
                            "yards": 8
                        }, {
                            "playId": 40.0,
                            "period": 1,
                            "time": "5:26",
                            "down": "3",
                            "distance": "2",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "Okla22",
                            "endYardLine": "Okla8",
                            "driveId": 6,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 6,
                                "name": "Off Left Guard"
                            },
                            "playText": "Clyde Edwards-Helaire rush to the left for 14 yards to the Okla8. Tackled by Justin Broiles and Pat Fields.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976650,
                                    "firstName": "Clyde",
                                    "lastName": "Edwards-Helaire",
                                    "uniform": "22"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976219,
                                    "firstName": "Justin",
                                    "lastName": "Broiles",
                                    "uniform": "25"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1107838,
                                    "firstName": "Pat",
                                    "lastName": "Fields",
                                    "uniform": "10"
                                }
                            }],
                            "direction": "L",
                            "yards": 14
                        }, {
                            "playId": 41.0,
                            "period": 1,
                            "time": "5:10",
                            "down": "1",
                            "distance": "8",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 7,
                            "yardLine": "Okla8",
                            "endYardLine": "Okla8",
                            "driveId": 6,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 7,
                                "name": "Middle"
                            },
                            "playText": "Clyde Edwards-Helaire rush to the left for 0 yards to the Okla8. Tackled by Neville Gallimore and David Ugwoegbu.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976650,
                                    "firstName": "Clyde",
                                    "lastName": "Edwards-Helaire",
                                    "uniform": "22"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 865911,
                                    "firstName": "Neville",
                                    "lastName": "Gallimore",
                                    "uniform": "90"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1174757,
                                    "firstName": "David",
                                    "lastName": "Ugwoegbu",
                                    "uniform": "34"
                                }
                            }],
                            "direction": "L",
                            "yards": 0
                        }, {
                            "playId": 42.0,
                            "period": 1,
                            "time": "4:31",
                            "down": "2",
                            "distance": "8",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 7,
                            "homeScoreAfter": 13,
                            "yardLine": "Okla8",
                            "endYardLine": "Okla0",
                            "driveId": 6,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the left to Terrace Marshall Jr. for 8 yards for a TOUCHDOWN.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109285,
                                    "firstName": "Terrace",
                                    "lastName": "Marshall Jr.",
                                    "uniform": "6"
                                }
                            }],
                            "direction": "L",
                            "yards": 8
                        }, {
                            "playId": 43.0,
                            "period": 1,
                            "time": null,
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 13,
                            "homeScoreAfter": 14,
                            "yardLine": "Okla3",
                            "endYardLine": "Okla3",
                            "driveId": 6,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Cade York extra point is GOOD.",
                            "playType": {
                                "playTypeId": 22,
                                "name": "Made Extra Point"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161747,
                                    "firstName": "Cade",
                                    "lastName": "York",
                                    "uniform": "36"
                                }
                            }],
                            "direction": "M",
                            "yards": 0
                        }, {
                            "playId": 44.0,
                            "period": 1,
                            "time": "4:24",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 14,
                            "homeScoreAfter": 14,
                            "yardLine": "LSU35",
                            "endYardLine": "Okla38",
                            "driveId": 6,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 1,
                                "name": "Short"
                            },
                            "playText": "Avery Atkins kicks off to the Okla5. Charleston Rambo return for 33 yards to Okla38. Tackled by Avery Atkins.",
                            "playType": {
                                "playTypeId": 5,
                                "name": "Kickoff"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1129411,
                                    "firstName": "Avery",
                                    "lastName": "Atkins",
                                    "uniform": "32"
                                }
                            }, {
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 2,
                                "player": {
                                    "playerId": 1062033,
                                    "firstName": "Charleston",
                                    "lastName": "Rambo",
                                    "uniform": "14"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1129411,
                                    "firstName": "Avery",
                                    "lastName": "Atkins",
                                    "uniform": "32"
                                }
                            }],
                            "direction": "L",
                            "yards": 33
                        }, {
                            "playId": 46.0,
                            "period": 1,
                            "time": "4:15",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 14,
                            "homeScoreAfter": 14,
                            "yardLine": "Okla38",
                            "endYardLine": "Okla38",
                            "driveId": 7,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts incomplete pass to the middle intended for CeeDee Lamb.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062020,
                                    "firstName": "CeeDee",
                                    "lastName": "Lamb",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "M",
                            "yards": 0
                        }, {
                            "playId": 47.0,
                            "period": 1,
                            "time": "4:11",
                            "down": "2",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 14,
                            "homeScoreAfter": 14,
                            "yardLine": "Okla38",
                            "endYardLine": "Okla38",
                            "driveId": 7,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts incomplete pass to the right intended for Jeremiah Hall defensed by JaCoby Stevens.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 4,
                                "playerInvolvedType": "pass defender",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976267,
                                    "firstName": "JaCoby",
                                    "lastName": "Stevens",
                                    "uniform": "3"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976225,
                                    "firstName": "Jeremiah",
                                    "lastName": "Hall",
                                    "uniform": "27"
                                }
                            }],
                            "direction": "R",
                            "yards": 0
                        }, {
                            "playId": 48.0,
                            "period": 1,
                            "time": "4:06",
                            "down": "3",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 14,
                            "homeScoreAfter": 14,
                            "yardLine": "Okla38",
                            "endYardLine": "Okla38",
                            "driveId": 7,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts incomplete pass to the right intended for Jadon Haselwood.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1162603,
                                    "firstName": "Jadon",
                                    "lastName": "Haselwood",
                                    "uniform": "11"
                                }
                            }],
                            "direction": "R",
                            "yards": 0
                        }, {
                            "playId": 49.0,
                            "period": 1,
                            "time": "3:58",
                            "down": "4",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 14,
                            "homeScoreAfter": 14,
                            "yardLine": "Okla38",
                            "endYardLine": "LSU14",
                            "driveId": 7,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 11,
                                "name": "Downed"
                            },
                            "playText": "Reeves Mundschau punts for 48 yards to LSU14. No return.",
                            "playType": {
                                "playTypeId": 7,
                                "name": "Punt"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062029,
                                    "firstName": "Reeves",
                                    "lastName": "Mundschau",
                                    "uniform": "46"
                                }
                            }],
                            "direction": "R",
                            "yards": 0
                        }, {
                            "playId": 51.0,
                            "period": 1,
                            "time": "3:47",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 14,
                            "homeScoreAfter": 14,
                            "yardLine": "LSU14",
                            "endYardLine": "LSU23",
                            "driveId": 8,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the middle to Chris Curry for 9 yards to the LSU23. Tackled by Tre Brown.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062002,
                                    "firstName": "Tre",
                                    "lastName": "Brown",
                                    "uniform": "6"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109986,
                                    "firstName": "Chris",
                                    "lastName": "Curry",
                                    "uniform": "24"
                                }
                            }],
                            "direction": "M",
                            "yards": 9
                        }, {
                            "playId": 52.0,
                            "period": 1,
                            "time": "3:25",
                            "down": "2",
                            "distance": "1",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 14,
                            "homeScoreAfter": 14,
                            "yardLine": "LSU23",
                            "endYardLine": "LSU22",
                            "driveId": 8,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 5,
                                "name": "Off Left Tackle"
                            },
                            "playText": "Chris Curry rush to the left for a loss of 1 yard to the LSU22. Tackled by Kenneth Murray.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109986,
                                    "firstName": "Chris",
                                    "lastName": "Curry",
                                    "uniform": "24"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976232,
                                    "firstName": "Kenneth",
                                    "lastName": "Murray",
                                    "uniform": "9"
                                }
                            }],
                            "direction": "L",
                            "yards": -1
                        }, {
                            "playId": 53.0,
                            "period": 1,
                            "time": "2:44",
                            "down": "3",
                            "distance": "2",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 14,
                            "homeScoreAfter": 14,
                            "yardLine": "LSU22",
                            "endYardLine": "LSU46",
                            "driveId": 8,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the right to Terrace Marshall Jr. for 24 yards to the LSU46. Tackled by Tre Brown.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062002,
                                    "firstName": "Tre",
                                    "lastName": "Brown",
                                    "uniform": "6"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109285,
                                    "firstName": "Terrace",
                                    "lastName": "Marshall Jr.",
                                    "uniform": "6"
                                }
                            }],
                            "direction": "R",
                            "yards": 24
                        }, {
                            "playId": 54.0,
                            "period": 1,
                            "time": "2:15",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 14,
                            "homeScoreAfter": 14,
                            "yardLine": "LSU46",
                            "endYardLine": "Okla35",
                            "driveId": 8,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 6,
                                "name": "Off Left Guard"
                            },
                            "playText": "Chris Curry rush to the left for 19 yards to the Okla35. Tackled by Brendan Radley-Hiles.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109986,
                                    "firstName": "Chris",
                                    "lastName": "Curry",
                                    "uniform": "24"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1107847,
                                    "firstName": "Brendan",
                                    "lastName": "Radley-Hiles",
                                    "uniform": "44"
                                }
                            }],
                            "direction": "L",
                            "yards": 19
                        }, {
                            "playId": 55.0,
                            "period": 1,
                            "time": "1:32",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 14,
                            "homeScoreAfter": 14,
                            "yardLine": "Okla35",
                            "endYardLine": "Okla35",
                            "driveId": 8,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow incomplete pass to the left intended for Justin Jefferson.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1069535,
                                    "firstName": "Justin",
                                    "lastName": "Jefferson",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "L",
                            "yards": 0
                        }, {
                            "playId": 56.0,
                            "period": 1,
                            "time": "1:23",
                            "down": "2",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 14,
                            "homeScoreAfter": 20,
                            "yardLine": "Okla35",
                            "endYardLine": "Okla0",
                            "driveId": 8,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the left to Justin Jefferson for 35 yards for a TOUCHDOWN.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1069535,
                                    "firstName": "Justin",
                                    "lastName": "Jefferson",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "L",
                            "yards": 35
                        }, {
                            "playId": 57.0,
                            "period": 1,
                            "time": null,
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 20,
                            "homeScoreAfter": 21,
                            "yardLine": "Okla3",
                            "endYardLine": "Okla3",
                            "driveId": 8,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Cade York extra point is GOOD.",
                            "playType": {
                                "playTypeId": 22,
                                "name": "Made Extra Point"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161747,
                                    "firstName": "Cade",
                                    "lastName": "York",
                                    "uniform": "36"
                                }
                            }],
                            "direction": "M",
                            "yards": 0
                        }, {
                            "playId": 58.0,
                            "period": 1,
                            "time": "1:16",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 21,
                            "homeScoreAfter": 21,
                            "yardLine": "LSU35",
                            "endYardLine": "Okla0",
                            "driveId": 8,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 9,
                                "name": "Touchback"
                            },
                            "playText": "Avery Atkins kicks off to the endzone. Touchback.",
                            "playType": {
                                "playTypeId": 5,
                                "name": "Kickoff"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1129411,
                                    "firstName": "Avery",
                                    "lastName": "Atkins",
                                    "uniform": "32"
                                }
                            }],
                            "direction": "L",
                            "yards": 65
                        }, {
                            "playId": 60.0,
                            "period": 1,
                            "time": "1:16",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 21,
                            "homeScoreAfter": 21,
                            "yardLine": "Okla25",
                            "endYardLine": "Okla25",
                            "driveId": 9,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts incomplete pass to the middle intended for Kennedy Brooks.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1061999,
                                    "firstName": "Kennedy",
                                    "lastName": "Brooks",
                                    "uniform": "26"
                                }
                            }],
                            "direction": "M",
                            "yards": 0
                        }, {
                            "playId": 61.0,
                            "period": 1,
                            "time": "1:12",
                            "down": "2",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 21,
                            "homeScoreAfter": 21,
                            "yardLine": "Okla25",
                            "endYardLine": "Okla33",
                            "driveId": 9,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 7,
                                "name": "Middle"
                            },
                            "playText": "Jalen Hurts rush to the middle for 8 yards to the Okla33. Tackled by Neil Farrell Jr..",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976652,
                                    "firstName": "Neil",
                                    "lastName": "Farrell Jr.",
                                    "uniform": "92"
                                }
                            }],
                            "direction": "M",
                            "yards": 8
                        }, {
                            "playId": 62.0,
                            "period": 1,
                            "time": "0:29",
                            "down": "3",
                            "distance": "2",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 21,
                            "homeScoreAfter": 21,
                            "yardLine": "Okla33",
                            "endYardLine": "Okla39",
                            "driveId": 9,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 10,
                                "name": "Off Right End"
                            },
                            "playText": "Jalen Hurts rush to the right for 6 yards to the Okla39. Tackled by Jacob Phillips.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976660,
                                    "firstName": "Jacob",
                                    "lastName": "Phillips",
                                    "uniform": "6"
                                }
                            }],
                            "direction": "R",
                            "yards": 6
                        }, {
                            "playId": 64.0,
                            "period": 2,
                            "time": "15:00",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 21,
                            "homeScoreAfter": 21,
                            "yardLine": "Okla39",
                            "endYardLine": "Okla39",
                            "driveId": 9,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts incomplete pass to the left intended for Kennedy Brooks.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1061999,
                                    "firstName": "Kennedy",
                                    "lastName": "Brooks",
                                    "uniform": "26"
                                }
                            }],
                            "direction": "L",
                            "yards": 0
                        }, {
                            "playId": 65.0,
                            "period": 2,
                            "time": "14:54",
                            "down": "2",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 21,
                            "homeScoreAfter": 21,
                            "yardLine": "Okla39",
                            "endYardLine": "Okla44",
                            "driveId": 9,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 10,
                                "name": "Off Right End"
                            },
                            "playText": "Kennedy Brooks rush to the right for 5 yards to the Okla44. Tackled by K'Lavon Chaisson.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1061999,
                                    "firstName": "Kennedy",
                                    "lastName": "Brooks",
                                    "uniform": "26"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976648,
                                    "firstName": "K'Lavon",
                                    "lastName": "Chaisson",
                                    "uniform": "18"
                                }
                            }],
                            "direction": "R",
                            "yards": 5
                        }, {
                            "playId": 66.0,
                            "period": 2,
                            "time": "14:31",
                            "down": "3",
                            "distance": "5",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 21,
                            "homeScoreAfter": 21,
                            "yardLine": "Okla44",
                            "endYardLine": "Okla44",
                            "driveId": 9,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts incomplete pass to the left intended for CeeDee Lamb.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062020,
                                    "firstName": "CeeDee",
                                    "lastName": "Lamb",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "L",
                            "yards": 0
                        }, {
                            "playId": 67.0,
                            "period": 2,
                            "time": "14:23",
                            "down": "4",
                            "distance": "5",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 21,
                            "homeScoreAfter": 21,
                            "yardLine": "Okla44",
                            "endYardLine": "LSU0",
                            "driveId": 9,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 9,
                                "name": "Touchback"
                            },
                            "playText": "Reeves Mundschau punts for 56 yards to LSU0. Touchback.",
                            "playType": {
                                "playTypeId": 7,
                                "name": "Punt"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062029,
                                    "firstName": "Reeves",
                                    "lastName": "Mundschau",
                                    "uniform": "46"
                                }
                            }],
                            "direction": "R",
                            "yards": 56
                        }, {
                            "playId": 69.0,
                            "period": 2,
                            "time": "14:15",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 21,
                            "homeScoreAfter": 21,
                            "yardLine": "LSU20",
                            "endYardLine": "LSU20",
                            "driveId": 10,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow incomplete pass to the left intended for Chris Curry.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109986,
                                    "firstName": "Chris",
                                    "lastName": "Curry",
                                    "uniform": "24"
                                }
                            }],
                            "direction": "L",
                            "yards": 0
                        }, {
                            "playId": 70.0,
                            "period": 2,
                            "time": "14:11",
                            "down": "2",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 21,
                            "homeScoreAfter": 21,
                            "yardLine": "LSU20",
                            "endYardLine": "LSU20",
                            "driveId": 10,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow incomplete pass to the right intended for Justin Jefferson.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1069535,
                                    "firstName": "Justin",
                                    "lastName": "Jefferson",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "R",
                            "yards": 0
                        }, {
                            "playId": 71.0,
                            "period": 2,
                            "time": "14:05",
                            "down": "3",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 21,
                            "homeScoreAfter": 21,
                            "yardLine": "LSU20",
                            "endYardLine": "LSU31",
                            "driveId": 10,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 10,
                                "name": "Off Right End"
                            },
                            "playText": "Joe Burrow rush to the right for 11 yards to the LSU31. Tackled by Brendan Radley-Hiles.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1107847,
                                    "firstName": "Brendan",
                                    "lastName": "Radley-Hiles",
                                    "uniform": "44"
                                }
                            }],
                            "direction": "R",
                            "yards": 11
                        }, {
                            "playId": 72.0,
                            "period": 2,
                            "time": "14:15",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 21,
                            "homeScoreAfter": 21,
                            "yardLine": "LSU31",
                            "endYardLine": "LSU46",
                            "driveId": 10,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "penaltyType": {
                                "penaltyTypeId": 73,
                                "name": "Ejection for Targeting"
                            },
                            "playText": "Penalty: Ejection for Targeting on Sooners (Brendan Radley-Hiles) 15 yards.",
                            "playType": {
                                "playTypeId": 11,
                                "name": "Penalty"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1107847,
                                    "firstName": "Brendan",
                                    "lastName": "Radley-Hiles",
                                    "uniform": "44"
                                }
                            }],
                            "direction": null,
                            "yards": 15
                        }, {
                            "playId": 73.0,
                            "period": 2,
                            "time": "13:04",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 21,
                            "homeScoreAfter": 21,
                            "yardLine": "LSU46",
                            "endYardLine": "Okla42",
                            "driveId": 10,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 6,
                                "name": "Off Left Guard"
                            },
                            "playText": "Joe Burrow rush to the left for 12 yards to the Okla42. Tackled by DaShaun White.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1125590,
                                    "firstName": "DaShaun",
                                    "lastName": "White",
                                    "uniform": "23"
                                }
                            }],
                            "direction": "L",
                            "yards": 12
                        }, {
                            "playId": 74.0,
                            "period": 2,
                            "time": "12:26",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 21,
                            "homeScoreAfter": 21,
                            "yardLine": "Okla42",
                            "endYardLine": "Okla42",
                            "driveId": 10,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow incomplete pass to the right intended for Thaddeus Moss.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 920813,
                                    "firstName": "Thaddeus",
                                    "lastName": "Moss",
                                    "uniform": "81"
                                }
                            }],
                            "direction": "R",
                            "yards": 0
                        }, {
                            "playId": 75.0,
                            "period": 2,
                            "time": "12:21",
                            "down": "2",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 21,
                            "homeScoreAfter": 27,
                            "yardLine": "Okla42",
                            "endYardLine": "Okla0",
                            "driveId": 10,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the right to Justin Jefferson for 42 yards for a TOUCHDOWN.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1069535,
                                    "firstName": "Justin",
                                    "lastName": "Jefferson",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "R",
                            "yards": 42
                        }, {
                            "playId": 76.0,
                            "period": 2,
                            "time": null,
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 27,
                            "homeScoreAfter": 28,
                            "yardLine": "Okla3",
                            "endYardLine": "Okla3",
                            "driveId": 10,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Cade York extra point is GOOD.",
                            "playType": {
                                "playTypeId": 22,
                                "name": "Made Extra Point"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161747,
                                    "firstName": "Cade",
                                    "lastName": "York",
                                    "uniform": "36"
                                }
                            }],
                            "direction": "M",
                            "yards": 0
                        }, {
                            "playId": 77.0,
                            "period": 2,
                            "time": "12:13",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 28,
                            "homeScoreAfter": 28,
                            "yardLine": "LSU35",
                            "endYardLine": "Okla0",
                            "driveId": 10,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 9,
                                "name": "Touchback"
                            },
                            "playText": "Avery Atkins kicks off to the endzone. Touchback.",
                            "playType": {
                                "playTypeId": 5,
                                "name": "Kickoff"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1129411,
                                    "firstName": "Avery",
                                    "lastName": "Atkins",
                                    "uniform": "32"
                                }
                            }],
                            "direction": "M",
                            "yards": 65
                        }, {
                            "playId": 79.0,
                            "period": 2,
                            "time": "12:13",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 28,
                            "homeScoreAfter": 28,
                            "yardLine": "Okla25",
                            "endYardLine": "LSU45",
                            "driveId": 11,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": true,
                            "playText": "Jalen Hurts pass INTERCEPTED by Kary Vincent Jr.. No return.",
                            "playType": {
                                "playTypeId": 9,
                                "name": "Interception"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 2,
                                "player": {
                                    "playerId": 976665,
                                    "firstName": "Kary",
                                    "lastName": "Vincent Jr.",
                                    "uniform": "5"
                                }
                            }],
                            "direction": "R",
                            "yards": 0
                        }, {
                            "playId": 81.0,
                            "period": 2,
                            "time": "12:03",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 28,
                            "homeScoreAfter": 28,
                            "yardLine": "LSU45",
                            "endYardLine": "Okla44",
                            "driveId": 12,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the middle to Thaddeus Moss for 11 yards to the Okla44. Tackled by Woodi Washington and Marquise Overton.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1174758,
                                    "firstName": "Woodi",
                                    "lastName": "Washington",
                                    "uniform": "5"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 865928,
                                    "firstName": "Marquise",
                                    "lastName": "Overton",
                                    "uniform": "97"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 920813,
                                    "firstName": "Thaddeus",
                                    "lastName": "Moss",
                                    "uniform": "81"
                                }
                            }],
                            "direction": "M",
                            "yards": 11
                        }, {
                            "playId": 82.0,
                            "period": 2,
                            "time": "11:47",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 28,
                            "homeScoreAfter": 28,
                            "yardLine": "Okla44",
                            "endYardLine": "Okla42",
                            "driveId": 12,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 10,
                                "name": "Off Right End"
                            },
                            "playText": "Chris Curry rush to the right for 2 yards to the Okla42. Tackled by Kenneth Murray.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109986,
                                    "firstName": "Chris",
                                    "lastName": "Curry",
                                    "uniform": "24"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976232,
                                    "firstName": "Kenneth",
                                    "lastName": "Murray",
                                    "uniform": "9"
                                }
                            }],
                            "direction": "R",
                            "yards": 2
                        }, {
                            "playId": 83.0,
                            "period": 2,
                            "time": "12:03",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 28,
                            "homeScoreAfter": 28,
                            "yardLine": "Okla42",
                            "endYardLine": "LSU43",
                            "driveId": 12,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "penaltyType": {
                                "penaltyTypeId": 14,
                                "name": "Illegal Block"
                            },
                            "playText": "Penalty: Illegal Block on Tigers (Thaddeus Moss) -15 yards.",
                            "playType": {
                                "playTypeId": 10,
                                "name": "Penalty"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 920813,
                                    "firstName": "Thaddeus",
                                    "lastName": "Moss",
                                    "uniform": "81"
                                }
                            }],
                            "direction": null,
                            "yards": -15
                        }, {
                            "playId": 84.0,
                            "period": 2,
                            "time": "11:22",
                            "down": "1",
                            "distance": "23",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 28,
                            "homeScoreAfter": 28,
                            "yardLine": "LSU43",
                            "endYardLine": "Okla47",
                            "driveId": 12,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the right to Justin Jefferson for 10 yards to the Okla47.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1069535,
                                    "firstName": "Justin",
                                    "lastName": "Jefferson",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "R",
                            "yards": 10
                        }, {
                            "playId": 85.0,
                            "period": 2,
                            "time": "10:50",
                            "down": "2",
                            "distance": "13",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 28,
                            "homeScoreAfter": 28,
                            "yardLine": "Okla47",
                            "endYardLine": "Okla37",
                            "driveId": 12,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the right to Justin Jefferson for 10 yards to the Okla37. Tackled by Tre Brown.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062002,
                                    "firstName": "Tre",
                                    "lastName": "Brown",
                                    "uniform": "6"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1069535,
                                    "firstName": "Justin",
                                    "lastName": "Jefferson",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "R",
                            "yards": 10
                        }, {
                            "playId": 87.0,
                            "period": 2,
                            "time": null,
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 28,
                            "homeScoreAfter": 28,
                            "yardLine": "Okla37",
                            "endYardLine": "LSU48",
                            "driveId": 12,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "penaltyType": {
                                "penaltyTypeId": 33,
                                "name": "Illegal Use of Hands"
                            },
                            "playText": "Penalty: Illegal Use of Hands on Tigers (Adrian Magee) -15 yards.",
                            "playType": {
                                "playTypeId": 10,
                                "name": "Penalty"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 865571,
                                    "firstName": "Adrian",
                                    "lastName": "Magee",
                                    "uniform": "73"
                                }
                            }],
                            "direction": null,
                            "yards": -15
                        }, {
                            "playId": 88.0,
                            "period": 2,
                            "time": "9:48",
                            "down": "3",
                            "distance": "18",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 28,
                            "homeScoreAfter": 28,
                            "yardLine": "LSU48",
                            "endYardLine": "Okla30",
                            "driveId": 12,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the right to Ja'Marr Chase for 22 yards to the Okla30. Tackled by Tre Brown.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062002,
                                    "firstName": "Tre",
                                    "lastName": "Brown",
                                    "uniform": "6"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109979,
                                    "firstName": "Ja'Marr",
                                    "lastName": "Chase",
                                    "uniform": "1"
                                }
                            }],
                            "direction": "R",
                            "yards": 22
                        }, {
                            "playId": 89.0,
                            "period": 2,
                            "time": "9:25",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 28,
                            "homeScoreAfter": 34,
                            "yardLine": "Okla30",
                            "endYardLine": "Okla0",
                            "driveId": 12,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the left to Justin Jefferson for 30 yards for a TOUCHDOWN.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1069535,
                                    "firstName": "Justin",
                                    "lastName": "Jefferson",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "L",
                            "yards": 30
                        }, {
                            "playId": 90.0,
                            "period": 2,
                            "time": null,
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 34,
                            "homeScoreAfter": 35,
                            "yardLine": "Okla3",
                            "endYardLine": "Okla3",
                            "driveId": 12,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Cade York extra point is GOOD.",
                            "playType": {
                                "playTypeId": 22,
                                "name": "Made Extra Point"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161747,
                                    "firstName": "Cade",
                                    "lastName": "York",
                                    "uniform": "36"
                                }
                            }],
                            "direction": "M",
                            "yards": 0
                        }, {
                            "playId": 91.0,
                            "period": 2,
                            "time": "9:17",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 35,
                            "homeScoreAfter": 35,
                            "yardLine": "LSU35",
                            "endYardLine": "Okla0",
                            "driveId": 12,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 9,
                                "name": "Touchback"
                            },
                            "playText": "Avery Atkins kicks off to the endzone. Touchback.",
                            "playType": {
                                "playTypeId": 5,
                                "name": "Kickoff"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1129411,
                                    "firstName": "Avery",
                                    "lastName": "Atkins",
                                    "uniform": "32"
                                }
                            }],
                            "direction": "L",
                            "yards": 65
                        }, {
                            "playId": 93.0,
                            "period": 2,
                            "time": "9:17",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 35,
                            "homeScoreAfter": 35,
                            "yardLine": "Okla25",
                            "endYardLine": "Okla28",
                            "driveId": 13,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 6,
                                "name": "Off Left Guard"
                            },
                            "playText": "Jalen Hurts rush to the left for 3 yards to the Okla28. Tackled by Patrick Queen and Rashard Lawrence.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976661,
                                    "firstName": "Patrick",
                                    "lastName": "Queen",
                                    "uniform": "8"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 910823,
                                    "firstName": "Rashard",
                                    "lastName": "Lawrence",
                                    "uniform": "90"
                                }
                            }],
                            "direction": "L",
                            "yards": 3
                        }, {
                            "playId": 94.0,
                            "period": 2,
                            "time": "8:41",
                            "down": "2",
                            "distance": "7",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 35,
                            "homeScoreAfter": 35,
                            "yardLine": "Okla28",
                            "endYardLine": "Okla22",
                            "driveId": 13,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts sacked at Okla22 for a loss of 6 yards by K'Lavon Chaisson.",
                            "playType": {
                                "playTypeId": 3,
                                "name": "Sack"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976648,
                                    "firstName": "K'Lavon",
                                    "lastName": "Chaisson",
                                    "uniform": "18"
                                }
                            }],
                            "direction": "M",
                            "yards": -6
                        }, {
                            "playId": 95.0,
                            "period": 2,
                            "time": null,
                            "down": "3",
                            "distance": "13",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 35,
                            "homeScoreAfter": 35,
                            "yardLine": "Okla22",
                            "endYardLine": "Okla22",
                            "driveId": 13,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Tigers timeout.",
                            "playType": {
                                "playTypeId": 58,
                                "name": "Defensive Time Out"
                            },
                            "playersInvolved": [],
                            "direction": null,
                            "yards": 0
                        }, {
                            "playId": 96.0,
                            "period": 2,
                            "time": "8:04",
                            "down": "3",
                            "distance": "13",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 35,
                            "homeScoreAfter": 35,
                            "yardLine": "Okla22",
                            "endYardLine": "LSU49",
                            "driveId": 13,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts pass to the middle to CeeDee Lamb for 29 yards to the LSU49. Tackled by K'Lavon Chaisson.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976648,
                                    "firstName": "K'Lavon",
                                    "lastName": "Chaisson",
                                    "uniform": "18"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062020,
                                    "firstName": "CeeDee",
                                    "lastName": "Lamb",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "M",
                            "yards": 29
                        }, {
                            "playId": 97.0,
                            "period": 2,
                            "time": "9:17",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 35,
                            "homeScoreAfter": 35,
                            "yardLine": "LSU49",
                            "endYardLine": "LSU34",
                            "driveId": 13,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "penaltyType": {
                                "penaltyTypeId": 45,
                                "name": "Roughing Passer"
                            },
                            "playText": "Penalty: Roughing Passer on Tigers (Patrick Queen) 15 yards.",
                            "playType": {
                                "playTypeId": 11,
                                "name": "Penalty"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976661,
                                    "firstName": "Patrick",
                                    "lastName": "Queen",
                                    "uniform": "8"
                                }
                            }],
                            "direction": null,
                            "yards": 15
                        }, {
                            "playId": 98.0,
                            "period": 2,
                            "time": "7:36",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 35,
                            "homeScoreAfter": 35,
                            "yardLine": "LSU34",
                            "endYardLine": "LSU27",
                            "driveId": 13,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 10,
                                "name": "Off Right End"
                            },
                            "playText": "Kennedy Brooks rush to the right for 7 yards to the LSU27. Tackled by Jacob Phillips.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1061999,
                                    "firstName": "Kennedy",
                                    "lastName": "Brooks",
                                    "uniform": "26"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976660,
                                    "firstName": "Jacob",
                                    "lastName": "Phillips",
                                    "uniform": "6"
                                }
                            }],
                            "direction": "R",
                            "yards": 7
                        }, {
                            "playId": 99.0,
                            "period": 2,
                            "time": "7:07",
                            "down": "2",
                            "distance": "3",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 35,
                            "homeScoreAfter": 35,
                            "yardLine": "LSU27",
                            "endYardLine": "LSU23",
                            "driveId": 13,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 4,
                                "name": "Off Left End"
                            },
                            "playText": "Kennedy Brooks rush to the left for 4 yards to the LSU23. Tackled by Jacob Phillips.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1061999,
                                    "firstName": "Kennedy",
                                    "lastName": "Brooks",
                                    "uniform": "26"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976660,
                                    "firstName": "Jacob",
                                    "lastName": "Phillips",
                                    "uniform": "6"
                                }
                            }],
                            "direction": "L",
                            "yards": 4
                        }, {
                            "playId": 100.0,
                            "period": 2,
                            "time": "6:46",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 35,
                            "homeScoreAfter": 35,
                            "yardLine": "LSU23",
                            "endYardLine": "LSU10",
                            "driveId": 13,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts pass to the left to CeeDee Lamb for 13 yards to the LSU10. Tackled by Derek Stingley Jr..",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161722,
                                    "firstName": "Derek",
                                    "lastName": "Stingley Jr.",
                                    "uniform": "24"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062020,
                                    "firstName": "CeeDee",
                                    "lastName": "Lamb",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "L",
                            "yards": 13
                        }, {
                            "playId": 101.0,
                            "period": 2,
                            "time": "6:20",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 35,
                            "homeScoreAfter": 35,
                            "yardLine": "LSU10",
                            "endYardLine": "LSU10",
                            "driveId": 13,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts incomplete pass to the left intended for CeeDee Lamb.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062020,
                                    "firstName": "CeeDee",
                                    "lastName": "Lamb",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "L",
                            "yards": 0
                        }, {
                            "playId": 102.0,
                            "period": 2,
                            "time": "6:14",
                            "down": "2",
                            "distance": "10",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 35,
                            "homeScoreAfter": 35,
                            "yardLine": "LSU10",
                            "endYardLine": "LSU6",
                            "driveId": 13,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 8,
                                "name": "Off Right Guard"
                            },
                            "playText": "Kennedy Brooks rush to the middle for 4 yards to the LSU6. Tackled by Siaki Ika.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1061999,
                                    "firstName": "Kennedy",
                                    "lastName": "Brooks",
                                    "uniform": "26"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161724,
                                    "firstName": "Siaki",
                                    "lastName": "Ika",
                                    "uniform": "62"
                                }
                            }],
                            "direction": "M",
                            "yards": 4
                        }, {
                            "playId": 104.0,
                            "period": 2,
                            "time": null,
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 35,
                            "homeScoreAfter": 35,
                            "yardLine": "LSU6",
                            "endYardLine": "LSU2",
                            "driveId": 13,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "penaltyType": {
                                "penaltyTypeId": 41,
                                "name": "Pass Interference"
                            },
                            "playText": "Penalty: Pass Interference on Tigers (Kristian Fulton) 4 yards.",
                            "playType": {
                                "playTypeId": 11,
                                "name": "Penalty"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 910821,
                                    "firstName": "Kristian",
                                    "lastName": "Fulton",
                                    "uniform": "1"
                                }
                            }],
                            "direction": null,
                            "yards": 4
                        }, {
                            "playId": 105.0,
                            "period": 2,
                            "time": "5:27",
                            "down": "1",
                            "distance": "2",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 7,
                            "homeScoreBefore": 35,
                            "homeScoreAfter": 35,
                            "yardLine": "LSU2",
                            "endYardLine": "LSU2",
                            "driveId": 13,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 9,
                                "name": "Off Right Tackle"
                            },
                            "playText": "Kennedy Brooks rush to the middle for 0 yards to the LSU2. Tackled by Rashard Lawrence and Grant Delpit.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1061999,
                                    "firstName": "Kennedy",
                                    "lastName": "Brooks",
                                    "uniform": "26"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 910823,
                                    "firstName": "Rashard",
                                    "lastName": "Lawrence",
                                    "uniform": "90"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976282,
                                    "firstName": "Grant",
                                    "lastName": "Delpit",
                                    "uniform": "7"
                                }
                            }],
                            "direction": "M",
                            "yards": 0
                        }, {
                            "playId": 106.0,
                            "period": 2,
                            "time": "4:50",
                            "down": "2",
                            "distance": "2",
                            "awayScoreBefore": 7,
                            "awayScoreAfter": 13,
                            "homeScoreBefore": 35,
                            "homeScoreAfter": 35,
                            "yardLine": "LSU2",
                            "endYardLine": "LSU0",
                            "driveId": 13,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 9,
                                "name": "Off Right Tackle"
                            },
                            "playText": "Jalen Hurts rush to the right for 2 yards for a TOUCHDOWN.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }],
                            "direction": "R",
                            "yards": 2
                        }, {
                            "playId": 107.0,
                            "period": 2,
                            "time": null,
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 13,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 35,
                            "homeScoreAfter": 35,
                            "yardLine": "LSU3",
                            "endYardLine": "LSU3",
                            "driveId": 13,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Gabe Brkic extra point is GOOD.",
                            "playType": {
                                "playTypeId": 22,
                                "name": "Made Extra Point"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1125621,
                                    "firstName": "Gabe",
                                    "lastName": "Brkic",
                                    "uniform": "47"
                                }
                            }],
                            "direction": "M",
                            "yards": 0
                        }, {
                            "playId": 108.0,
                            "period": 2,
                            "time": "4:45",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 35,
                            "homeScoreAfter": 35,
                            "yardLine": "Okla35",
                            "endYardLine": "LSU0",
                            "driveId": 13,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 9,
                                "name": "Touchback"
                            },
                            "playText": "Gabe Brkic kicks off to the endzone. Touchback.",
                            "playType": {
                                "playTypeId": 5,
                                "name": "Kickoff"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1125621,
                                    "firstName": "Gabe",
                                    "lastName": "Brkic",
                                    "uniform": "47"
                                }
                            }],
                            "direction": "R",
                            "yards": 65
                        }, {
                            "playId": 110.0,
                            "period": 2,
                            "time": "4:45",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 35,
                            "homeScoreAfter": 35,
                            "yardLine": "LSU25",
                            "endYardLine": "LSU38",
                            "driveId": 14,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 7,
                                "name": "Middle"
                            },
                            "playText": "Chris Curry rush to the middle for 13 yards to the LSU38. Tackled by Pat Fields.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109986,
                                    "firstName": "Chris",
                                    "lastName": "Curry",
                                    "uniform": "24"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1107838,
                                    "firstName": "Pat",
                                    "lastName": "Fields",
                                    "uniform": "10"
                                }
                            }],
                            "direction": "M",
                            "yards": 13
                        }, {
                            "playId": 111.0,
                            "period": 2,
                            "time": "4:29",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 35,
                            "homeScoreAfter": 41,
                            "yardLine": "LSU38",
                            "endYardLine": "Okla0",
                            "driveId": 14,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the left to Thaddeus Moss for 62 yards for a TOUCHDOWN.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 920813,
                                    "firstName": "Thaddeus",
                                    "lastName": "Moss",
                                    "uniform": "81"
                                }
                            }],
                            "direction": "L",
                            "yards": 62
                        }, {
                            "playId": 112.0,
                            "period": 2,
                            "time": null,
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 41,
                            "homeScoreAfter": 42,
                            "yardLine": "Okla3",
                            "endYardLine": "Okla3",
                            "driveId": 14,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Cade York extra point is GOOD.",
                            "playType": {
                                "playTypeId": 22,
                                "name": "Made Extra Point"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161747,
                                    "firstName": "Cade",
                                    "lastName": "York",
                                    "uniform": "36"
                                }
                            }],
                            "direction": "M",
                            "yards": 0
                        }, {
                            "playId": 113.0,
                            "period": 2,
                            "time": "4:18",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 42,
                            "homeScoreAfter": 42,
                            "yardLine": "LSU35",
                            "endYardLine": "Okla0",
                            "driveId": 14,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 9,
                                "name": "Touchback"
                            },
                            "playText": "Avery Atkins kicks off to the endzone. Touchback.",
                            "playType": {
                                "playTypeId": 5,
                                "name": "Kickoff"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1129411,
                                    "firstName": "Avery",
                                    "lastName": "Atkins",
                                    "uniform": "32"
                                }
                            }],
                            "direction": "L",
                            "yards": 65
                        }, {
                            "playId": 115.0,
                            "period": 2,
                            "time": "4:18",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 42,
                            "homeScoreAfter": 42,
                            "yardLine": "Okla25",
                            "endYardLine": "Okla25",
                            "driveId": 15,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts incomplete pass to the left intended for Charleston Rambo.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062033,
                                    "firstName": "Charleston",
                                    "lastName": "Rambo",
                                    "uniform": "14"
                                }
                            }],
                            "direction": "L",
                            "yards": 0
                        }, {
                            "playId": 117.0,
                            "period": 2,
                            "time": "4:18",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 42,
                            "homeScoreAfter": 42,
                            "yardLine": "Okla25",
                            "endYardLine": "Okla15",
                            "driveId": 15,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "penaltyType": {
                                "penaltyTypeId": 12,
                                "name": "Holding"
                            },
                            "playText": "Penalty: Holding on Sooners (R.J. Proctor) -10 yards.",
                            "playType": {
                                "playTypeId": 10,
                                "name": "Penalty"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 883965,
                                    "firstName": "R.J.",
                                    "lastName": "Proctor",
                                    "uniform": "73"
                                }
                            }],
                            "direction": null,
                            "yards": -10
                        }, {
                            "playId": 118.0,
                            "period": 2,
                            "time": "3:50",
                            "down": "2",
                            "distance": "20",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 42,
                            "homeScoreAfter": 42,
                            "yardLine": "Okla15",
                            "endYardLine": "Okla15",
                            "driveId": 15,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts incomplete pass to the right intended for CeeDee Lamb.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062020,
                                    "firstName": "CeeDee",
                                    "lastName": "Lamb",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "R",
                            "yards": 0
                        }, {
                            "playId": 119.0,
                            "period": 2,
                            "time": "3:44",
                            "down": "3",
                            "distance": "20",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 42,
                            "homeScoreAfter": 42,
                            "yardLine": "Okla15",
                            "endYardLine": "Okla20",
                            "driveId": 15,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts pass to the middle to Jeremiah Hall for 5 yards to the Okla20. Tackled by Cordale Flott and Jacob Phillips.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161732,
                                    "firstName": "Cordale",
                                    "lastName": "Flott",
                                    "uniform": "25"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976660,
                                    "firstName": "Jacob",
                                    "lastName": "Phillips",
                                    "uniform": "6"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976225,
                                    "firstName": "Jeremiah",
                                    "lastName": "Hall",
                                    "uniform": "27"
                                }
                            }],
                            "direction": "M",
                            "yards": 5
                        }, {
                            "playId": 120.0,
                            "period": 2,
                            "time": "3:01",
                            "down": "4",
                            "distance": "15",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 42,
                            "homeScoreAfter": 42,
                            "yardLine": "Okla20",
                            "endYardLine": "LSU37",
                            "driveId": 15,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 10,
                                "name": "Fair Catch"
                            },
                            "playText": "Reeves Mundschau punts for 43 yards to LSU37. No return.",
                            "playType": {
                                "playTypeId": 7,
                                "name": "Punt"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062029,
                                    "firstName": "Reeves",
                                    "lastName": "Mundschau",
                                    "uniform": "46"
                                }
                            }],
                            "direction": "M",
                            "yards": 0
                        }, {
                            "playId": 122.0,
                            "period": 2,
                            "time": "2:54",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 42,
                            "homeScoreAfter": 42,
                            "yardLine": "LSU37",
                            "endYardLine": "LSU42",
                            "driveId": 16,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 6,
                                "name": "Off Left Guard"
                            },
                            "playText": "Tyrion Davis-Price rush to the middle for 5 yards to the LSU42. Tackled by Justin Broiles.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161729,
                                    "firstName": "Tyrion",
                                    "lastName": "Davis-Price",
                                    "uniform": "3"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976219,
                                    "firstName": "Justin",
                                    "lastName": "Broiles",
                                    "uniform": "25"
                                }
                            }],
                            "direction": "M",
                            "yards": 5
                        }, {
                            "playId": 123.0,
                            "period": 2,
                            "time": "2:19",
                            "down": "2",
                            "distance": "5",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 42,
                            "homeScoreAfter": 42,
                            "yardLine": "LSU42",
                            "endYardLine": "Okla49",
                            "driveId": 16,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the left to Thaddeus Moss for 9 yards to the Okla49. Tackled by Woodi Washington and Kenneth Murray.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1174758,
                                    "firstName": "Woodi",
                                    "lastName": "Washington",
                                    "uniform": "5"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976232,
                                    "firstName": "Kenneth",
                                    "lastName": "Murray",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 920813,
                                    "firstName": "Thaddeus",
                                    "lastName": "Moss",
                                    "uniform": "81"
                                }
                            }],
                            "direction": "L",
                            "yards": 9
                        }, {
                            "playId": 124.0,
                            "period": 2,
                            "time": "1:57",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 42,
                            "homeScoreAfter": 42,
                            "yardLine": "Okla49",
                            "endYardLine": "Okla10",
                            "driveId": 16,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the left to Ja'Marr Chase for 39 yards to the Okla10. Tackled by Justin Broiles.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976219,
                                    "firstName": "Justin",
                                    "lastName": "Broiles",
                                    "uniform": "25"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109979,
                                    "firstName": "Ja'Marr",
                                    "lastName": "Chase",
                                    "uniform": "1"
                                }
                            }],
                            "direction": "L",
                            "yards": 39
                        }, {
                            "playId": 125.0,
                            "period": 2,
                            "time": "1:27",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 42,
                            "homeScoreAfter": 42,
                            "yardLine": "Okla10",
                            "endYardLine": "Okla4",
                            "driveId": 16,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 9,
                                "name": "Off Right Tackle"
                            },
                            "playText": "Tyrion Davis-Price rush to the right for 6 yards to the Okla4. Tackled by Jalen Redmond and Tre Brown.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161729,
                                    "firstName": "Tyrion",
                                    "lastName": "Davis-Price",
                                    "uniform": "3"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1107846,
                                    "firstName": "Jalen",
                                    "lastName": "Redmond",
                                    "uniform": "31"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062002,
                                    "firstName": "Tre",
                                    "lastName": "Brown",
                                    "uniform": "6"
                                }
                            }],
                            "direction": "R",
                            "yards": 6
                        }, {
                            "playId": 127.0,
                            "period": 2,
                            "time": "2:54",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 42,
                            "homeScoreAfter": 42,
                            "yardLine": "Okla4",
                            "endYardLine": "Okla2",
                            "driveId": 16,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "penaltyType": {
                                "penaltyTypeId": 30,
                                "name": "Illegal Substitution"
                            },
                            "playText": "Penalty: Illegal Substitution on Sooners 2 yards.",
                            "playType": {
                                "playTypeId": 11,
                                "name": "Penalty"
                            },
                            "playersInvolved": [],
                            "direction": null,
                            "yards": 2
                        }, {
                            "playId": 128.0,
                            "period": 2,
                            "time": "0:55",
                            "down": "2",
                            "distance": "2",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 42,
                            "homeScoreAfter": 48,
                            "yardLine": "Okla2",
                            "endYardLine": "Okla0",
                            "driveId": 16,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the left to Terrace Marshall Jr. for 2 yards for a TOUCHDOWN.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109285,
                                    "firstName": "Terrace",
                                    "lastName": "Marshall Jr.",
                                    "uniform": "6"
                                }
                            }],
                            "direction": "L",
                            "yards": 2
                        }, {
                            "playId": 129.0,
                            "period": 2,
                            "time": null,
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 48,
                            "homeScoreAfter": 49,
                            "yardLine": "Okla3",
                            "endYardLine": "Okla3",
                            "driveId": 16,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Cade York extra point is GOOD.",
                            "playType": {
                                "playTypeId": 22,
                                "name": "Made Extra Point"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161747,
                                    "firstName": "Cade",
                                    "lastName": "York",
                                    "uniform": "36"
                                }
                            }],
                            "direction": "M",
                            "yards": 0
                        }, {
                            "playId": 130.0,
                            "period": 2,
                            "time": "0:50",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 49,
                            "homeScoreAfter": 49,
                            "yardLine": "LSU35",
                            "endYardLine": "Okla0",
                            "driveId": 16,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 9,
                                "name": "Touchback"
                            },
                            "playText": "Avery Atkins kicks off to the endzone. Touchback.",
                            "playType": {
                                "playTypeId": 5,
                                "name": "Kickoff"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1129411,
                                    "firstName": "Avery",
                                    "lastName": "Atkins",
                                    "uniform": "32"
                                }
                            }],
                            "direction": "L",
                            "yards": 65
                        }, {
                            "playId": 132.0,
                            "period": 2,
                            "time": "0:50",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 49,
                            "homeScoreAfter": 49,
                            "yardLine": "Okla25",
                            "endYardLine": "Okla25",
                            "driveId": 17,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts incomplete pass to the middle intended for CeeDee Lamb.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062020,
                                    "firstName": "CeeDee",
                                    "lastName": "Lamb",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "M",
                            "yards": 0
                        }, {
                            "playId": 134.0,
                            "period": 2,
                            "time": "0:50",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 49,
                            "homeScoreAfter": 49,
                            "yardLine": "Okla25",
                            "endYardLine": "Okla15",
                            "driveId": 17,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "penaltyType": {
                                "penaltyTypeId": 12,
                                "name": "Holding"
                            },
                            "playText": "Penalty: Holding on Sooners (Creed Humphrey) -10 yards.",
                            "playType": {
                                "playTypeId": 10,
                                "name": "Penalty"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976228,
                                    "firstName": "Creed",
                                    "lastName": "Humphrey",
                                    "uniform": "56"
                                }
                            }],
                            "direction": null,
                            "yards": -10
                        }, {
                            "playId": 135.0,
                            "period": 2,
                            "time": "0:40",
                            "down": "2",
                            "distance": "20",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 49,
                            "homeScoreAfter": 49,
                            "yardLine": "Okla15",
                            "endYardLine": "Okla23",
                            "driveId": 17,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 4,
                                "name": "Off Left End"
                            },
                            "playText": "Kennedy Brooks rush to the left for 8 yards to the Okla23. Tackled by Patrick Queen and Cameron Lewis.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1061999,
                                    "firstName": "Kennedy",
                                    "lastName": "Brooks",
                                    "uniform": "26"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976661,
                                    "firstName": "Patrick",
                                    "lastName": "Queen",
                                    "uniform": "8"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 910824,
                                    "firstName": "Cameron",
                                    "lastName": "Lewis",
                                    "uniform": "31"
                                }
                            }],
                            "direction": "L",
                            "yards": 8
                        }, {
                            "playId": 137.0,
                            "period": 3,
                            "time": "15:00",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 49,
                            "homeScoreAfter": 49,
                            "yardLine": "Okla35",
                            "endYardLine": "LSU26",
                            "driveId": 17,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 1,
                                "name": "Short"
                            },
                            "playText": "Gabe Brkic kicks off to the LSU6. Jontre Kirklin return for 20 yards to LSU26. Tackled by Charleston Rambo and Brian Asamoah.",
                            "playType": {
                                "playTypeId": 5,
                                "name": "Kickoff"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1125621,
                                    "firstName": "Gabe",
                                    "lastName": "Brkic",
                                    "uniform": "47"
                                }
                            }, {
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 2,
                                "player": {
                                    "playerId": 976657,
                                    "firstName": "Jontre",
                                    "lastName": "Kirklin",
                                    "uniform": "13"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062033,
                                    "firstName": "Charleston",
                                    "lastName": "Rambo",
                                    "uniform": "14"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1125630,
                                    "firstName": "Brian",
                                    "lastName": "Asamoah",
                                    "uniform": "24"
                                }
                            }],
                            "direction": "R",
                            "yards": 20
                        }, {
                            "playId": 139.0,
                            "period": 3,
                            "time": "14:51",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 49,
                            "homeScoreAfter": 49,
                            "yardLine": "LSU26",
                            "endYardLine": "LSU28",
                            "driveId": 18,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 8,
                                "name": "Off Right Guard"
                            },
                            "playText": "Chris Curry rush to the middle for 2 yards to the LSU28. Tackled by Kenneth Murray.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109986,
                                    "firstName": "Chris",
                                    "lastName": "Curry",
                                    "uniform": "24"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976232,
                                    "firstName": "Kenneth",
                                    "lastName": "Murray",
                                    "uniform": "9"
                                }
                            }],
                            "direction": "M",
                            "yards": 2
                        }, {
                            "playId": 140.0,
                            "period": 3,
                            "time": "14:11",
                            "down": "2",
                            "distance": "8",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 49,
                            "homeScoreAfter": 49,
                            "yardLine": "LSU28",
                            "endYardLine": "LSU40",
                            "driveId": 18,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the left to Justin Jefferson for 12 yards to the LSU40. Tackled by Justin Broiles.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976219,
                                    "firstName": "Justin",
                                    "lastName": "Broiles",
                                    "uniform": "25"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1069535,
                                    "firstName": "Justin",
                                    "lastName": "Jefferson",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "L",
                            "yards": 12
                        }, {
                            "playId": 141.0,
                            "period": 3,
                            "time": "13:39",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 49,
                            "homeScoreAfter": 49,
                            "yardLine": "LSU40",
                            "endYardLine": "LSU43",
                            "driveId": 18,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 8,
                                "name": "Off Right Guard"
                            },
                            "playText": "Chris Curry rush to the middle for 3 yards to the LSU43. Tackled by DaShaun White and LaRon Stokes.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109986,
                                    "firstName": "Chris",
                                    "lastName": "Curry",
                                    "uniform": "24"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1125590,
                                    "firstName": "DaShaun",
                                    "lastName": "White",
                                    "uniform": "23"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1162636,
                                    "firstName": "LaRon",
                                    "lastName": "Stokes",
                                    "uniform": "96"
                                }
                            }],
                            "direction": "M",
                            "yards": 3
                        }, {
                            "playId": 142.0,
                            "period": 3,
                            "time": "13:05",
                            "down": "2",
                            "distance": "7",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 49,
                            "homeScoreAfter": 49,
                            "yardLine": "LSU43",
                            "endYardLine": "LSU43",
                            "driveId": 18,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow incomplete pass to the left intended for Ja'Marr Chase defensed by Parnell Motley.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 4,
                                "playerInvolvedType": "pass defender",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 923080,
                                    "firstName": "Parnell",
                                    "lastName": "Motley",
                                    "uniform": "11"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109979,
                                    "firstName": "Ja'Marr",
                                    "lastName": "Chase",
                                    "uniform": "1"
                                }
                            }],
                            "direction": "L",
                            "yards": 0
                        }, {
                            "playId": 143.0,
                            "period": 3,
                            "time": "12:59",
                            "down": "3",
                            "distance": "7",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 49,
                            "homeScoreAfter": 49,
                            "yardLine": "LSU43",
                            "endYardLine": "Okla25",
                            "driveId": 18,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the left to Terrace Marshall Jr. for 32 yards to the Okla25. Tackled by DaShaun White.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1125590,
                                    "firstName": "DaShaun",
                                    "lastName": "White",
                                    "uniform": "23"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109285,
                                    "firstName": "Terrace",
                                    "lastName": "Marshall Jr.",
                                    "uniform": "6"
                                }
                            }],
                            "direction": "L",
                            "yards": 32
                        }, {
                            "playId": 144.0,
                            "period": 3,
                            "time": "12:41",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 49,
                            "homeScoreAfter": 49,
                            "yardLine": "Okla25",
                            "endYardLine": "Okla25",
                            "driveId": 18,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow incomplete pass to the left intended for Justin Jefferson.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1069535,
                                    "firstName": "Justin",
                                    "lastName": "Jefferson",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "L",
                            "yards": 0
                        }, {
                            "playId": 145.0,
                            "period": 3,
                            "time": "12:34",
                            "down": "2",
                            "distance": "10",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 49,
                            "homeScoreAfter": 49,
                            "yardLine": "Okla25",
                            "endYardLine": "Okla25",
                            "driveId": 18,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow incomplete pass to the right.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }],
                            "direction": "R",
                            "yards": 0
                        }, {
                            "playId": 149.0,
                            "period": 3,
                            "time": "12:15",
                            "down": "3",
                            "distance": "10",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 49,
                            "homeScoreAfter": 49,
                            "yardLine": "Okla25",
                            "endYardLine": "Okla17",
                            "driveId": 18,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the right to Justin Jefferson for 8 yards to the Okla17. Tackled by DaShaun White.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1125590,
                                    "firstName": "DaShaun",
                                    "lastName": "White",
                                    "uniform": "23"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1069535,
                                    "firstName": "Justin",
                                    "lastName": "Jefferson",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "R",
                            "yards": 8
                        }, {
                            "playId": 150.0,
                            "period": 3,
                            "time": "11:53",
                            "down": "4",
                            "distance": "2",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 49,
                            "homeScoreAfter": 49,
                            "yardLine": "Okla17",
                            "endYardLine": "Okla12",
                            "driveId": 18,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 5,
                                "name": "Off Left Tackle"
                            },
                            "playText": "Ja'Marr Chase rush to the left for 5 yards to the Okla12. Tackled by Justin Broiles and Woodi Washington.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109979,
                                    "firstName": "Ja'Marr",
                                    "lastName": "Chase",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976219,
                                    "firstName": "Justin",
                                    "lastName": "Broiles",
                                    "uniform": "25"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1174758,
                                    "firstName": "Woodi",
                                    "lastName": "Washington",
                                    "uniform": "5"
                                }
                            }],
                            "direction": "L",
                            "yards": 5
                        }, {
                            "playId": 151.0,
                            "period": 3,
                            "time": "11:17",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 49,
                            "homeScoreAfter": 49,
                            "yardLine": "Okla12",
                            "endYardLine": "Okla7",
                            "driveId": 18,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 10,
                                "name": "Off Right End"
                            },
                            "playText": "Chris Curry rush to the right for 5 yards to the Okla7. Tackled by Justin Broiles and Pat Fields.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109986,
                                    "firstName": "Chris",
                                    "lastName": "Curry",
                                    "uniform": "24"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976219,
                                    "firstName": "Justin",
                                    "lastName": "Broiles",
                                    "uniform": "25"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1107838,
                                    "firstName": "Pat",
                                    "lastName": "Fields",
                                    "uniform": "10"
                                }
                            }],
                            "direction": "R",
                            "yards": 5
                        }, {
                            "playId": 152.0,
                            "period": 3,
                            "time": "10:51",
                            "down": "2",
                            "distance": "5",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 49,
                            "homeScoreAfter": 49,
                            "yardLine": "Okla7",
                            "endYardLine": "Okla4",
                            "driveId": 18,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 5,
                                "name": "Off Left Tackle"
                            },
                            "playText": "Chris Curry rush to the left for 3 yards to the Okla4. Tackled by Parnell Motley and Woodi Washington.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109986,
                                    "firstName": "Chris",
                                    "lastName": "Curry",
                                    "uniform": "24"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 923080,
                                    "firstName": "Parnell",
                                    "lastName": "Motley",
                                    "uniform": "11"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1174758,
                                    "firstName": "Woodi",
                                    "lastName": "Washington",
                                    "uniform": "5"
                                }
                            }],
                            "direction": "L",
                            "yards": 3
                        }, {
                            "playId": 153.0,
                            "period": 3,
                            "time": "10:32",
                            "down": "3",
                            "distance": "2",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 49,
                            "homeScoreAfter": 49,
                            "yardLine": "Okla4",
                            "endYardLine": "Okla2",
                            "driveId": 18,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 9,
                                "name": "Off Right Tackle"
                            },
                            "playText": "Chris Curry rush to the middle for 2 yards to the Okla2. Tackled by Marquise Overton.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109986,
                                    "firstName": "Chris",
                                    "lastName": "Curry",
                                    "uniform": "24"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 865928,
                                    "firstName": "Marquise",
                                    "lastName": "Overton",
                                    "uniform": "97"
                                }
                            }],
                            "direction": "M",
                            "yards": 2
                        }, {
                            "playId": 154.0,
                            "period": 3,
                            "time": "10:16",
                            "down": "1",
                            "distance": "2",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 49,
                            "homeScoreAfter": 55,
                            "yardLine": "Okla2",
                            "endYardLine": "Okla0",
                            "driveId": 18,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 9,
                                "name": "Off Right Tackle"
                            },
                            "playText": "Joe Burrow rush to the right for 2 yards for a TOUCHDOWN.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }],
                            "direction": "R",
                            "yards": 2
                        }, {
                            "playId": 155.0,
                            "period": 3,
                            "time": null,
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 55,
                            "homeScoreAfter": 56,
                            "yardLine": "Okla3",
                            "endYardLine": "Okla3",
                            "driveId": 18,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Cade York extra point is GOOD.",
                            "playType": {
                                "playTypeId": 22,
                                "name": "Made Extra Point"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161747,
                                    "firstName": "Cade",
                                    "lastName": "York",
                                    "uniform": "36"
                                }
                            }],
                            "direction": "M",
                            "yards": 0
                        }, {
                            "playId": 156.0,
                            "period": 3,
                            "time": "10:11",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU35",
                            "endYardLine": "Okla0",
                            "driveId": 18,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 9,
                                "name": "Touchback"
                            },
                            "playText": "Avery Atkins kicks off to the endzone. Touchback.",
                            "playType": {
                                "playTypeId": 5,
                                "name": "Kickoff"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1129411,
                                    "firstName": "Avery",
                                    "lastName": "Atkins",
                                    "uniform": "32"
                                }
                            }],
                            "direction": "L",
                            "yards": 65
                        }, {
                            "playId": 158.0,
                            "period": 3,
                            "time": "10:11",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "Okla25",
                            "endYardLine": "Okla25",
                            "driveId": 19,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts incomplete pass to the left intended for CeeDee Lamb defensed by Kary Vincent Jr..",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 4,
                                "playerInvolvedType": "pass defender",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976665,
                                    "firstName": "Kary",
                                    "lastName": "Vincent Jr.",
                                    "uniform": "5"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062020,
                                    "firstName": "CeeDee",
                                    "lastName": "Lamb",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "L",
                            "yards": 0
                        }, {
                            "playId": 159.0,
                            "period": 3,
                            "time": "10:04",
                            "down": "2",
                            "distance": "10",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "Okla25",
                            "endYardLine": "Okla28",
                            "driveId": 19,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 7,
                                "name": "Middle"
                            },
                            "playText": "Jalen Hurts rush to the middle for 3 yards to the Okla28. Tackled by Glen Logan and Patrick Queen.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 910948,
                                    "firstName": "Glen",
                                    "lastName": "Logan",
                                    "uniform": "97"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976661,
                                    "firstName": "Patrick",
                                    "lastName": "Queen",
                                    "uniform": "8"
                                }
                            }],
                            "direction": "M",
                            "yards": 3
                        }, {
                            "playId": 160.0,
                            "period": 3,
                            "time": "9:20",
                            "down": "3",
                            "distance": "7",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "Okla28",
                            "endYardLine": "LSU46",
                            "driveId": 19,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts pass to the left to CeeDee Lamb for 26 yards to the LSU46. Tackled by Cameron Lewis.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 910824,
                                    "firstName": "Cameron",
                                    "lastName": "Lewis",
                                    "uniform": "31"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062020,
                                    "firstName": "CeeDee",
                                    "lastName": "Lamb",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "L",
                            "yards": 26
                        }, {
                            "playId": 161.0,
                            "period": 3,
                            "time": "8:55",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU46",
                            "endYardLine": "LSU46",
                            "driveId": 19,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts incomplete pass to the right intended for Charleston Rambo defensed by Kristian Fulton.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 4,
                                "playerInvolvedType": "pass defender",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 910821,
                                    "firstName": "Kristian",
                                    "lastName": "Fulton",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062033,
                                    "firstName": "Charleston",
                                    "lastName": "Rambo",
                                    "uniform": "14"
                                }
                            }],
                            "direction": "R",
                            "yards": 0
                        }, {
                            "playId": 162.0,
                            "period": 3,
                            "time": "8:49",
                            "down": "2",
                            "distance": "10",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU46",
                            "endYardLine": "LSU38",
                            "driveId": 19,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 5,
                                "name": "Off Left Tackle"
                            },
                            "playText": "Jeremiah Hall rush to the left for 8 yards to the LSU38. Tackled by Derek Stingley Jr. and Jacob Phillips.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976225,
                                    "firstName": "Jeremiah",
                                    "lastName": "Hall",
                                    "uniform": "27"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161722,
                                    "firstName": "Derek",
                                    "lastName": "Stingley Jr.",
                                    "uniform": "24"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976660,
                                    "firstName": "Jacob",
                                    "lastName": "Phillips",
                                    "uniform": "6"
                                }
                            }],
                            "direction": "L",
                            "yards": 8
                        }, {
                            "playId": 163.0,
                            "period": 3,
                            "time": "8:11",
                            "down": "3",
                            "distance": "2",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU38",
                            "endYardLine": "LSU26",
                            "driveId": 19,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts pass to the middle to Austin Stogner for 12 yards to the LSU26. Tackled by Grant Delpit.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976282,
                                    "firstName": "Grant",
                                    "lastName": "Delpit",
                                    "uniform": "7"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1162606,
                                    "firstName": "Austin",
                                    "lastName": "Stogner",
                                    "uniform": "18"
                                }
                            }],
                            "direction": "M",
                            "yards": 12
                        }, {
                            "playId": 164.0,
                            "period": 3,
                            "time": "7:39",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU26",
                            "endYardLine": "LSU17",
                            "driveId": 19,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts pass to the right to Charleston Rambo for 9 yards to the LSU17. Tackled by Kary Vincent Jr..",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976665,
                                    "firstName": "Kary",
                                    "lastName": "Vincent Jr.",
                                    "uniform": "5"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062033,
                                    "firstName": "Charleston",
                                    "lastName": "Rambo",
                                    "uniform": "14"
                                }
                            }],
                            "direction": "R",
                            "yards": 9
                        }, {
                            "playId": 165.0,
                            "period": 3,
                            "time": "6:56",
                            "down": "2",
                            "distance": "1",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU17",
                            "endYardLine": "LSU19",
                            "driveId": 19,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 9,
                                "name": "Off Right Tackle"
                            },
                            "playText": "Jalen Hurts rush to the right for a loss of 2 yards to the LSU19. Tackled by Patrick Queen.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976661,
                                    "firstName": "Patrick",
                                    "lastName": "Queen",
                                    "uniform": "8"
                                }
                            }],
                            "direction": "R",
                            "yards": -2
                        }, {
                            "playId": 166.0,
                            "period": 3,
                            "time": "6:26",
                            "down": "3",
                            "distance": "3",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU19",
                            "endYardLine": "LSU13",
                            "driveId": 19,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts pass to the right to Jadon Haselwood for 6 yards to the LSU13. Tackled by Kristian Fulton.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 910821,
                                    "firstName": "Kristian",
                                    "lastName": "Fulton",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1162603,
                                    "firstName": "Jadon",
                                    "lastName": "Haselwood",
                                    "uniform": "11"
                                }
                            }],
                            "direction": "R",
                            "yards": 6
                        }, {
                            "playId": 167.0,
                            "period": 3,
                            "time": "5:56",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU13",
                            "endYardLine": "LSU13",
                            "driveId": 19,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts incomplete pass to the left intended for CeeDee Lamb defensed by Grant Delpit.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 4,
                                "playerInvolvedType": "pass defender",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976282,
                                    "firstName": "Grant",
                                    "lastName": "Delpit",
                                    "uniform": "7"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062020,
                                    "firstName": "CeeDee",
                                    "lastName": "Lamb",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "L",
                            "yards": 0
                        }, {
                            "playId": 168.0,
                            "period": 3,
                            "time": "5:44",
                            "down": "2",
                            "distance": "10",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU13",
                            "endYardLine": "LSU12",
                            "driveId": 19,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 7,
                                "name": "Middle"
                            },
                            "playText": "Jalen Hurts rush to the middle for 1 yard to the LSU12. Tackled by K'Lavon Chaisson.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976648,
                                    "firstName": "K'Lavon",
                                    "lastName": "Chaisson",
                                    "uniform": "18"
                                }
                            }],
                            "direction": "M",
                            "yards": 1
                        }, {
                            "playId": 169.0,
                            "period": 3,
                            "time": "5:07",
                            "down": "3",
                            "distance": "9",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 14,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU12",
                            "endYardLine": "LSU12",
                            "driveId": 19,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts pass to the right to T.J. Pledger for 0 yards to the LSU12. Tackled by Jacob Phillips.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976660,
                                    "firstName": "Jacob",
                                    "lastName": "Phillips",
                                    "uniform": "6"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1107843,
                                    "firstName": "T.J.",
                                    "lastName": "Pledger",
                                    "uniform": "22"
                                }
                            }],
                            "direction": "R",
                            "yards": 0
                        }, {
                            "playId": 170.0,
                            "period": 3,
                            "time": "4:29",
                            "down": "4",
                            "distance": "9",
                            "awayScoreBefore": 14,
                            "awayScoreAfter": 20,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU12",
                            "endYardLine": "LSU0",
                            "driveId": 19,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 6,
                                "name": "Off Left Guard"
                            },
                            "playText": "Jalen Hurts rush to the left for 12 yards for a TOUCHDOWN.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }],
                            "direction": "L",
                            "yards": 12
                        }, {
                            "playId": 171.0,
                            "period": 3,
                            "time": "4:19",
                            "down": "1",
                            "distance": "3",
                            "awayScoreBefore": 20,
                            "awayScoreAfter": 20,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU3",
                            "endYardLine": "LSU8",
                            "driveId": 19,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "penaltyType": {
                                "penaltyTypeId": 11,
                                "name": "False Start"
                            },
                            "playText": "Penalty: False Start on Sooners (Tyrese Robinson) -5 yards.",
                            "playType": {
                                "playTypeId": 10,
                                "name": "Penalty"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062034,
                                    "firstName": "Tyrese",
                                    "lastName": "Robinson",
                                    "uniform": "52"
                                }
                            }],
                            "direction": null,
                            "yards": -5
                        }, {
                            "playId": 172.0,
                            "period": 3,
                            "time": null,
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 20,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU8",
                            "endYardLine": "LSU8",
                            "driveId": 19,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Gabe Brkic extra point is GOOD.",
                            "playType": {
                                "playTypeId": 22,
                                "name": "Made Extra Point"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1125621,
                                    "firstName": "Gabe",
                                    "lastName": "Brkic",
                                    "uniform": "47"
                                }
                            }],
                            "direction": "M",
                            "yards": 0
                        }, {
                            "playId": 173.0,
                            "period": 3,
                            "time": "4:19",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "Okla35",
                            "endYardLine": "LSU0",
                            "driveId": 19,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 9,
                                "name": "Touchback"
                            },
                            "playText": "Gabe Brkic kicks off to the endzone. Touchback.",
                            "playType": {
                                "playTypeId": 5,
                                "name": "Kickoff"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1125621,
                                    "firstName": "Gabe",
                                    "lastName": "Brkic",
                                    "uniform": "47"
                                }
                            }],
                            "direction": "L",
                            "yards": 65
                        }, {
                            "playId": 175.0,
                            "period": 3,
                            "time": "4:19",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU25",
                            "endYardLine": "LSU30",
                            "driveId": 20,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the right to Justin Jefferson for 5 yards to the LSU30. Tackled by Woodi Washington.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1174758,
                                    "firstName": "Woodi",
                                    "lastName": "Washington",
                                    "uniform": "5"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1069535,
                                    "firstName": "Justin",
                                    "lastName": "Jefferson",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "R",
                            "yards": 5
                        }, {
                            "playId": 176.0,
                            "period": 3,
                            "time": "3:43",
                            "down": "2",
                            "distance": "5",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU30",
                            "endYardLine": "LSU40",
                            "driveId": 20,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the left to Justin Jefferson for 10 yards to the LSU40. Tackled by Justin Broiles and Jalen Redmond.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976219,
                                    "firstName": "Justin",
                                    "lastName": "Broiles",
                                    "uniform": "25"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1107846,
                                    "firstName": "Jalen",
                                    "lastName": "Redmond",
                                    "uniform": "31"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1069535,
                                    "firstName": "Justin",
                                    "lastName": "Jefferson",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "L",
                            "yards": 10
                        }, {
                            "playId": 177.0,
                            "period": 3,
                            "time": "3:13",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU40",
                            "endYardLine": "LSU46",
                            "driveId": 20,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the middle to Justin Jefferson for 6 yards to the LSU46. Tackled by Kenneth Murray.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976232,
                                    "firstName": "Kenneth",
                                    "lastName": "Murray",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1069535,
                                    "firstName": "Justin",
                                    "lastName": "Jefferson",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "M",
                            "yards": 6
                        }, {
                            "playId": 178.0,
                            "period": 3,
                            "time": "2:28",
                            "down": "2",
                            "distance": "4",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU46",
                            "endYardLine": "Okla45",
                            "driveId": 20,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the right to Stephen Sullivan for 9 yards to the Okla45. Tackled by Justin Broiles and Woodi Washington.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976219,
                                    "firstName": "Justin",
                                    "lastName": "Broiles",
                                    "uniform": "25"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1174758,
                                    "firstName": "Woodi",
                                    "lastName": "Washington",
                                    "uniform": "5"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 910808,
                                    "firstName": "Stephen",
                                    "lastName": "Sullivan",
                                    "uniform": "10"
                                }
                            }],
                            "direction": "R",
                            "yards": 9
                        }, {
                            "playId": 179.0,
                            "period": 3,
                            "time": "1:51",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "Okla45",
                            "endYardLine": "Okla37",
                            "driveId": 20,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow pass to the middle to Tory Carter for 8 yards to the Okla37. Tackled by Justin Broiles.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976219,
                                    "firstName": "Justin",
                                    "lastName": "Broiles",
                                    "uniform": "25"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976645,
                                    "firstName": "Tory",
                                    "lastName": "Carter",
                                    "uniform": "44"
                                }
                            }],
                            "direction": "M",
                            "yards": 8
                        }, {
                            "playId": 180.0,
                            "period": 3,
                            "time": "1:11",
                            "down": "2",
                            "distance": "2",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "Okla37",
                            "endYardLine": "Okla29",
                            "driveId": 20,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 6,
                                "name": "Off Left Guard"
                            },
                            "playText": "Tyrion Davis-Price rush to the left for 8 yards to the Okla29. Tackled by Parnell Motley.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161729,
                                    "firstName": "Tyrion",
                                    "lastName": "Davis-Price",
                                    "uniform": "3"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 923080,
                                    "firstName": "Parnell",
                                    "lastName": "Motley",
                                    "uniform": "11"
                                }
                            }],
                            "direction": "L",
                            "yards": 8
                        }, {
                            "playId": 181.0,
                            "period": 3,
                            "time": "0:25",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "Okla29",
                            "endYardLine": "Okla29",
                            "driveId": 20,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Joe Burrow incomplete pass to the right intended for Justin Jefferson.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1069535,
                                    "firstName": "Justin",
                                    "lastName": "Jefferson",
                                    "uniform": "2"
                                }
                            }],
                            "direction": "R",
                            "yards": 0
                        }, {
                            "playId": 182.0,
                            "period": 3,
                            "time": null,
                            "down": "2",
                            "distance": "10",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "Okla29",
                            "endYardLine": "Okla29",
                            "driveId": 20,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Sooners timeout.",
                            "playType": {
                                "playTypeId": 58,
                                "name": "Defensive Time Out"
                            },
                            "playersInvolved": [],
                            "direction": null,
                            "yards": 0
                        }, {
                            "playId": 183.0,
                            "period": 3,
                            "time": "0:19",
                            "down": "2",
                            "distance": "10",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "Okla29",
                            "endYardLine": "Okla23",
                            "driveId": 20,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 9,
                                "name": "Off Right Tackle"
                            },
                            "playText": "Tyrion Davis-Price rush to the left for 6 yards to the Okla23. Tackled by Woodi Washington and Neville Gallimore.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161729,
                                    "firstName": "Tyrion",
                                    "lastName": "Davis-Price",
                                    "uniform": "3"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1174758,
                                    "firstName": "Woodi",
                                    "lastName": "Washington",
                                    "uniform": "5"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 865911,
                                    "firstName": "Neville",
                                    "lastName": "Gallimore",
                                    "uniform": "90"
                                }
                            }],
                            "direction": "L",
                            "yards": 6
                        }, {
                            "playId": 185.0,
                            "period": 4,
                            "time": "15:00",
                            "down": "3",
                            "distance": "4",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "Okla23",
                            "endYardLine": "Okla28",
                            "driveId": 20,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": true,
                            "playText": "Joe Burrow sacked at Okla28 for a loss of 5 yards by Jalen Redmond. FUMBLE, recovered by LSU (Ed Ingram).",
                            "playType": {
                                "playTypeId": 14,
                                "name": "Fumble"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 878785,
                                    "firstName": "Joe",
                                    "lastName": "Burrow",
                                    "uniform": "9"
                                }
                            }, {
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 2,
                                "player": {
                                    "playerId": 976656,
                                    "firstName": "Ed",
                                    "lastName": "Ingram",
                                    "uniform": "70"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1107846,
                                    "firstName": "Jalen",
                                    "lastName": "Redmond",
                                    "uniform": "31"
                                }
                            }],
                            "direction": "M",
                            "yards": -5
                        }, {
                            "playId": 188.0,
                            "period": 4,
                            "time": "14:12",
                            "down": "4",
                            "distance": "9",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "Okla28",
                            "endYardLine": "Okla36",
                            "driveId": 20,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "kickType": {
                                "kickTypeId": 25,
                                "name": "Hit Left Upright"
                            },
                            "playText": "46 yard field goal attempt by Cade York is NO GOOD.",
                            "playType": {
                                "playTypeId": 36,
                                "name": "Missed Field Goal"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161747,
                                    "firstName": "Cade",
                                    "lastName": "York",
                                    "uniform": "36"
                                }
                            }],
                            "direction": "L",
                            "yards": 46
                        }, {
                            "playId": 189.0,
                            "period": 4,
                            "time": "14:06",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "Okla29",
                            "endYardLine": "Okla50",
                            "driveId": 21,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts pass to the right to Theo Wease for 21 yards to the Okla50. Tackled by Kary Vincent Jr..",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976665,
                                    "firstName": "Kary",
                                    "lastName": "Vincent Jr.",
                                    "uniform": "5"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1162602,
                                    "firstName": "Theo",
                                    "lastName": "Wease",
                                    "uniform": "10"
                                }
                            }],
                            "direction": "R",
                            "yards": 21
                        }, {
                            "playId": 190.0,
                            "period": 4,
                            "time": "13:35",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "Okla50",
                            "endYardLine": "LSU41",
                            "driveId": 21,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts pass to the right to Drake Stoops for 9 yards to the LSU41. Tackled by Patrick Queen.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976661,
                                    "firstName": "Patrick",
                                    "lastName": "Queen",
                                    "uniform": "8"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1125599,
                                    "firstName": "Drake",
                                    "lastName": "Stoops",
                                    "uniform": "12"
                                }
                            }],
                            "direction": "R",
                            "yards": 9
                        }, {
                            "playId": 191.0,
                            "period": 4,
                            "time": "12:58",
                            "down": "2",
                            "distance": "1",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU41",
                            "endYardLine": "LSU39",
                            "driveId": 21,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 7,
                                "name": "Middle"
                            },
                            "playText": "T.J. Pledger rush to the middle for 2 yards to the LSU39. Tackled by Jacob Phillips.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1107843,
                                    "firstName": "T.J.",
                                    "lastName": "Pledger",
                                    "uniform": "22"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976660,
                                    "firstName": "Jacob",
                                    "lastName": "Phillips",
                                    "uniform": "6"
                                }
                            }],
                            "direction": "M",
                            "yards": 2
                        }, {
                            "playId": 192.0,
                            "period": 4,
                            "time": "12:41",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU39",
                            "endYardLine": "LSU28",
                            "driveId": 21,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts pass to the right to Jadon Haselwood for 11 yards to the LSU28.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1162603,
                                    "firstName": "Jadon",
                                    "lastName": "Haselwood",
                                    "uniform": "11"
                                }
                            }],
                            "direction": "R",
                            "yards": 11
                        }, {
                            "playId": 193.0,
                            "period": 4,
                            "time": "12:16",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU28",
                            "endYardLine": "LSU27",
                            "driveId": 21,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 4,
                                "name": "Off Left End"
                            },
                            "playText": "Jalen Hurts rush to the left for 1 yard to the LSU27. Tackled by Jacob Phillips.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976660,
                                    "firstName": "Jacob",
                                    "lastName": "Phillips",
                                    "uniform": "6"
                                }
                            }],
                            "direction": "L",
                            "yards": 1
                        }, {
                            "playId": 194.0,
                            "period": 4,
                            "time": "11:30",
                            "down": "2",
                            "distance": "9",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU27",
                            "endYardLine": "LSU24",
                            "driveId": 21,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts pass to the right to Nick Basquine for 3 yards to the LSU24. Tackled by Kary Vincent Jr..",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976665,
                                    "firstName": "Kary",
                                    "lastName": "Vincent Jr.",
                                    "uniform": "5"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 835388,
                                    "firstName": "Nick",
                                    "lastName": "Basquine",
                                    "uniform": "83"
                                }
                            }],
                            "direction": "R",
                            "yards": 3
                        }, {
                            "playId": 195.0,
                            "period": 4,
                            "time": "11:01",
                            "down": "3",
                            "distance": "6",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU24",
                            "endYardLine": "LSU20",
                            "driveId": 21,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 6,
                                "name": "Off Left Guard"
                            },
                            "playText": "Jalen Hurts rush to the left for 4 yards to the LSU20. Tackled by Damone Clark.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109982,
                                    "firstName": "Damone",
                                    "lastName": "Clark",
                                    "uniform": "35"
                                }
                            }],
                            "direction": "L",
                            "yards": 4
                        }, {
                            "playId": 196.0,
                            "period": 4,
                            "time": null,
                            "down": "4",
                            "distance": "2",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU20",
                            "endYardLine": "LSU20",
                            "driveId": 21,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Sooners timeout.",
                            "playType": {
                                "playTypeId": 57,
                                "name": "Offense Time Out"
                            },
                            "playersInvolved": [],
                            "direction": null,
                            "yards": 0
                        }, {
                            "playId": 197.0,
                            "period": 4,
                            "time": "10:07",
                            "down": "4",
                            "distance": "2",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 21,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU20",
                            "endYardLine": "LSU1",
                            "driveId": 21,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Jalen Hurts pass to the left to Drake Stoops for 19 yards to the LSU1. Tackled by JaCoby Stevens.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 913271,
                                    "firstName": "Jalen",
                                    "lastName": "Hurts",
                                    "uniform": "1"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976267,
                                    "firstName": "JaCoby",
                                    "lastName": "Stevens",
                                    "uniform": "3"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1125599,
                                    "firstName": "Drake",
                                    "lastName": "Stoops",
                                    "uniform": "12"
                                }
                            }],
                            "direction": "L",
                            "yards": 19
                        }, {
                            "playId": 198.0,
                            "period": 4,
                            "time": "9:43",
                            "down": "1",
                            "distance": "1",
                            "awayScoreBefore": 21,
                            "awayScoreAfter": 27,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU1",
                            "endYardLine": "LSU0",
                            "driveId": 21,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 9,
                                "name": "Off Right Tackle"
                            },
                            "playText": "T.J. Pledger rush to the right for 1 yard for a TOUCHDOWN.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1107843,
                                    "firstName": "T.J.",
                                    "lastName": "Pledger",
                                    "uniform": "22"
                                }
                            }],
                            "direction": "R",
                            "yards": 1
                        }, {
                            "playId": 199.0,
                            "period": 4,
                            "time": null,
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 27,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU3",
                            "endYardLine": "LSU3",
                            "driveId": 21,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Gabe Brkic extra point is GOOD.",
                            "playType": {
                                "playTypeId": 22,
                                "name": "Made Extra Point"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1125621,
                                    "firstName": "Gabe",
                                    "lastName": "Brkic",
                                    "uniform": "47"
                                }
                            }],
                            "direction": "M",
                            "yards": 0
                        }, {
                            "playId": 200.0,
                            "period": 4,
                            "time": "9:39",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 28,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "Okla35",
                            "endYardLine": "LSU6",
                            "driveId": 21,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 1,
                                "name": "Short"
                            },
                            "playText": "Gabe Brkic kicks off to the LSU6. No return.",
                            "playType": {
                                "playTypeId": 5,
                                "name": "Kickoff"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1125621,
                                    "firstName": "Gabe",
                                    "lastName": "Brkic",
                                    "uniform": "47"
                                }
                            }],
                            "direction": "R",
                            "yards": 0
                        }, {
                            "playId": 202.0,
                            "period": 4,
                            "time": "9:39",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 28,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU25",
                            "endYardLine": "LSU29",
                            "driveId": 22,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 7,
                                "name": "Middle"
                            },
                            "playText": "Chris Curry rush to the right for 4 yards to the LSU29. Tackled by Isaiah Thomas.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109986,
                                    "firstName": "Chris",
                                    "lastName": "Curry",
                                    "uniform": "24"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062040,
                                    "firstName": "Isaiah",
                                    "lastName": "Thomas",
                                    "uniform": "95"
                                }
                            }],
                            "direction": "R",
                            "yards": 4
                        }, {
                            "playId": 203.0,
                            "period": 4,
                            "time": "8:56",
                            "down": "2",
                            "distance": "6",
                            "awayScoreBefore": 28,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU29",
                            "endYardLine": "LSU49",
                            "driveId": 22,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 6,
                                "name": "Off Left Guard"
                            },
                            "playText": "Chris Curry rush to the middle for 20 yards to the LSU49. Tackled by Isaiah Thomas.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109986,
                                    "firstName": "Chris",
                                    "lastName": "Curry",
                                    "uniform": "24"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062040,
                                    "firstName": "Isaiah",
                                    "lastName": "Thomas",
                                    "uniform": "95"
                                }
                            }],
                            "direction": "M",
                            "yards": 20
                        }, {
                            "playId": 204.0,
                            "period": 4,
                            "time": "8:07",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 28,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "LSU49",
                            "endYardLine": "Okla48",
                            "driveId": 22,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 9,
                                "name": "Off Right Tackle"
                            },
                            "playText": "Chris Curry rush to the right for 3 yards to the Okla48. Tackled by Jaden Davis and Woodi Washington.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109986,
                                    "firstName": "Chris",
                                    "lastName": "Curry",
                                    "uniform": "24"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1174721,
                                    "firstName": "Jaden",
                                    "lastName": "Davis",
                                    "uniform": "4"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1174758,
                                    "firstName": "Woodi",
                                    "lastName": "Washington",
                                    "uniform": "5"
                                }
                            }],
                            "direction": "R",
                            "yards": 3
                        }, {
                            "playId": 205.0,
                            "period": 4,
                            "time": "7:25",
                            "down": "2",
                            "distance": "7",
                            "awayScoreBefore": 28,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "Okla48",
                            "endYardLine": "Okla38",
                            "driveId": 22,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Myles Brennan pass to the middle to Derrick Dillon for 10 yards to the Okla38. Tackled by Woodi Washington.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976644,
                                    "firstName": "Myles",
                                    "lastName": "Brennan",
                                    "uniform": "15"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1174758,
                                    "firstName": "Woodi",
                                    "lastName": "Washington",
                                    "uniform": "5"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 865558,
                                    "firstName": "Derrick",
                                    "lastName": "Dillon",
                                    "uniform": "19"
                                }
                            }],
                            "direction": "M",
                            "yards": 10
                        }, {
                            "playId": 206.0,
                            "period": 4,
                            "time": "6:38",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 28,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "Okla38",
                            "endYardLine": "Okla26",
                            "driveId": 22,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Myles Brennan pass to the left to Derrick Dillon for 12 yards to the Okla26. Tackled by Woodi Washington.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976644,
                                    "firstName": "Myles",
                                    "lastName": "Brennan",
                                    "uniform": "15"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1174758,
                                    "firstName": "Woodi",
                                    "lastName": "Washington",
                                    "uniform": "5"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 865558,
                                    "firstName": "Derrick",
                                    "lastName": "Dillon",
                                    "uniform": "19"
                                }
                            }],
                            "direction": "L",
                            "yards": 12
                        }, {
                            "playId": 207.0,
                            "period": 4,
                            "time": "9:39",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 28,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "Okla26",
                            "endYardLine": "Okla24",
                            "driveId": 22,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": true,
                            "rushType": {
                                "rushTypeId": 7,
                                "name": "Middle"
                            },
                            "playText": "Chris Curry rush to the left for 2 yards to the Okla24. Tackled by Parnell Motley. FUMBLE, recovered by LSU (Chris Curry).",
                            "playType": {
                                "playTypeId": 14,
                                "name": "Fumble"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109986,
                                    "firstName": "Chris",
                                    "lastName": "Curry",
                                    "uniform": "24"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 923080,
                                    "firstName": "Parnell",
                                    "lastName": "Motley",
                                    "uniform": "11"
                                }
                            }],
                            "direction": "L",
                            "yards": 2
                        }, {
                            "playId": 210.0,
                            "period": 4,
                            "time": "5:09",
                            "down": "2",
                            "distance": "8",
                            "awayScoreBefore": 28,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "Okla24",
                            "endYardLine": "Okla23",
                            "driveId": 22,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 7,
                                "name": "Middle"
                            },
                            "playText": "Chris Curry rush to the middle for 1 yard to the Okla23. Tackled by DaShaun White.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1109986,
                                    "firstName": "Chris",
                                    "lastName": "Curry",
                                    "uniform": "24"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1125590,
                                    "firstName": "DaShaun",
                                    "lastName": "White",
                                    "uniform": "23"
                                }
                            }],
                            "direction": "M",
                            "yards": 1
                        }, {
                            "playId": 211.0,
                            "period": 4,
                            "time": "4:25",
                            "down": "3",
                            "distance": "7",
                            "awayScoreBefore": 28,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 56,
                            "yardLine": "Okla23",
                            "endYardLine": "Okla6",
                            "driveId": 22,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Myles Brennan pass to the middle to Racey McMath for 17 yards to the Okla6. Tackled by Pat Fields.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976644,
                                    "firstName": "Myles",
                                    "lastName": "Brennan",
                                    "uniform": "15"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1107838,
                                    "firstName": "Pat",
                                    "lastName": "Fields",
                                    "uniform": "10"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976658,
                                    "firstName": "Racey",
                                    "lastName": "McMath",
                                    "uniform": "17"
                                }
                            }],
                            "direction": "M",
                            "yards": 17
                        }, {
                            "playId": 212.0,
                            "period": 4,
                            "time": "4:04",
                            "down": "1",
                            "distance": "6",
                            "awayScoreBefore": 28,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 56,
                            "homeScoreAfter": 62,
                            "yardLine": "Okla6",
                            "endYardLine": "Okla0",
                            "driveId": 22,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 7,
                                "name": "Middle"
                            },
                            "playText": "John Emery Jr. rush to the middle for 6 yards for a TOUCHDOWN.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161730,
                                    "firstName": "John",
                                    "lastName": "Emery Jr.",
                                    "uniform": "4"
                                }
                            }],
                            "direction": "M",
                            "yards": 6
                        }, {
                            "playId": 213.0,
                            "period": 4,
                            "time": null,
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 28,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 62,
                            "homeScoreAfter": 63,
                            "yardLine": "Okla3",
                            "endYardLine": "Okla3",
                            "driveId": 22,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "playText": "Cade York extra point is GOOD.",
                            "playType": {
                                "playTypeId": 22,
                                "name": "Made Extra Point"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161747,
                                    "firstName": "Cade",
                                    "lastName": "York",
                                    "uniform": "36"
                                }
                            }],
                            "direction": "M",
                            "yards": 0
                        }, {
                            "playId": 214.0,
                            "period": 4,
                            "time": "3:59",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 28,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 63,
                            "homeScoreAfter": 63,
                            "yardLine": "LSU35",
                            "endYardLine": "Okla0",
                            "driveId": 22,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": true,
                            "kickType": {
                                "kickTypeId": 9,
                                "name": "Touchback"
                            },
                            "playText": "Avery Atkins kicks off to the endzone. Touchback.",
                            "playType": {
                                "playTypeId": 5,
                                "name": "Kickoff"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1129411,
                                    "firstName": "Avery",
                                    "lastName": "Atkins",
                                    "uniform": "32"
                                }
                            }],
                            "direction": "L",
                            "yards": 65
                        }, {
                            "playId": 217.0,
                            "period": 4,
                            "time": "3:59",
                            "down": null,
                            "distance": null,
                            "awayScoreBefore": 28,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 63,
                            "homeScoreAfter": 63,
                            "yardLine": "Okla25",
                            "endYardLine": "Okla15",
                            "driveId": 23,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "penaltyType": {
                                "penaltyTypeId": 12,
                                "name": "Holding"
                            },
                            "playText": "Penalty: Holding on Sooners (Marquis Hayes) -10 yards.",
                            "playType": {
                                "playTypeId": 10,
                                "name": "Penalty"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1062010,
                                    "firstName": "Marquis",
                                    "lastName": "Hayes",
                                    "uniform": "54"
                                }
                            }],
                            "direction": null,
                            "yards": -10
                        }, {
                            "playId": 218.0,
                            "period": 4,
                            "time": "3:51",
                            "down": "1",
                            "distance": "20",
                            "awayScoreBefore": 28,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 63,
                            "homeScoreAfter": 63,
                            "yardLine": "Okla15",
                            "endYardLine": "Okla23",
                            "driveId": 23,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Spencer Rattler pass to the right to Jadon Haselwood for 8 yards to the Okla23. Tackled by Eric Monroe.",
                            "playType": {
                                "playTypeId": 1,
                                "name": "Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1174752,
                                    "firstName": "Spencer",
                                    "lastName": "Rattler",
                                    "uniform": "7"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 910949,
                                    "firstName": "Eric",
                                    "lastName": "Monroe",
                                    "uniform": "11"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1162603,
                                    "firstName": "Jadon",
                                    "lastName": "Haselwood",
                                    "uniform": "11"
                                }
                            }],
                            "direction": "R",
                            "yards": 8
                        }, {
                            "playId": 219.0,
                            "period": 4,
                            "time": "3:08",
                            "down": "2",
                            "distance": "12",
                            "awayScoreBefore": 28,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 63,
                            "homeScoreAfter": 63,
                            "yardLine": "Okla23",
                            "endYardLine": "Okla31",
                            "driveId": 23,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 6,
                                "name": "Off Left Guard"
                            },
                            "playText": "Spencer Rattler rush to the left for 8 yards to the Okla31. Tackled by Cameron Lewis.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1174752,
                                    "firstName": "Spencer",
                                    "lastName": "Rattler",
                                    "uniform": "7"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 910824,
                                    "firstName": "Cameron",
                                    "lastName": "Lewis",
                                    "uniform": "31"
                                }
                            }],
                            "direction": "L",
                            "yards": 8
                        }, {
                            "playId": 220.0,
                            "period": 4,
                            "time": "2:24",
                            "down": "3",
                            "distance": "4",
                            "awayScoreBefore": 28,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 63,
                            "homeScoreAfter": 63,
                            "yardLine": "Okla31",
                            "endYardLine": "Okla31",
                            "driveId": 23,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Spencer Rattler incomplete pass to the left intended for Drake Stoops defensed by Jay Ward.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1174752,
                                    "firstName": "Spencer",
                                    "lastName": "Rattler",
                                    "uniform": "7"
                                }
                            }, {
                                "playerInvolvedTypeId": 4,
                                "playerInvolvedType": "pass defender",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161746,
                                    "firstName": "Jay",
                                    "lastName": "Ward",
                                    "uniform": "16"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1125599,
                                    "firstName": "Drake",
                                    "lastName": "Stoops",
                                    "uniform": "12"
                                }
                            }],
                            "direction": "L",
                            "yards": 0
                        }, {
                            "playId": 221.0,
                            "period": 4,
                            "time": "2:14",
                            "down": "4",
                            "distance": "4",
                            "awayScoreBefore": 28,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 63,
                            "homeScoreAfter": 63,
                            "yardLine": "Okla31",
                            "endYardLine": "Okla31",
                            "driveId": 23,
                            "startPossession": {
                                "teamId": 3430
                            },
                            "endPossession": {
                                "teamId": 3430
                            },
                            "isContinuation": false,
                            "playText": "Spencer Rattler incomplete pass to the left intended for T.J. Pledger defensed by Jay Ward.",
                            "playType": {
                                "playTypeId": 2,
                                "name": "Incomplete Pass"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1174752,
                                    "firstName": "Spencer",
                                    "lastName": "Rattler",
                                    "uniform": "7"
                                }
                            }, {
                                "playerInvolvedTypeId": 4,
                                "playerInvolvedType": "pass defender",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161746,
                                    "firstName": "Jay",
                                    "lastName": "Ward",
                                    "uniform": "16"
                                }
                            }, {
                                "playerInvolvedTypeId": 5,
                                "playerInvolvedType": "target",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1107843,
                                    "firstName": "T.J.",
                                    "lastName": "Pledger",
                                    "uniform": "22"
                                }
                            }],
                            "direction": "L",
                            "yards": 0
                        }, {
                            "playId": 222.0,
                            "period": 4,
                            "time": "2:10",
                            "down": "1",
                            "distance": "10",
                            "awayScoreBefore": 28,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 63,
                            "homeScoreAfter": 63,
                            "yardLine": "Okla31",
                            "endYardLine": "Okla30",
                            "driveId": 24,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 5,
                                "name": "Off Left Tackle"
                            },
                            "playText": "John Emery Jr. rush to the middle for 1 yard to the Okla30. Tackled by Brian Asamoah and Kenneth Murray.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161730,
                                    "firstName": "John",
                                    "lastName": "Emery Jr.",
                                    "uniform": "4"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1125630,
                                    "firstName": "Brian",
                                    "lastName": "Asamoah",
                                    "uniform": "24"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 976232,
                                    "firstName": "Kenneth",
                                    "lastName": "Murray",
                                    "uniform": "9"
                                }
                            }],
                            "direction": "M",
                            "yards": 1
                        }, {
                            "playId": 223.0,
                            "period": 4,
                            "time": "1:24",
                            "down": "2",
                            "distance": "9",
                            "awayScoreBefore": 28,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 63,
                            "homeScoreAfter": 63,
                            "yardLine": "Okla30",
                            "endYardLine": "Okla31",
                            "driveId": 24,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 7,
                                "name": "Middle"
                            },
                            "playText": "John Emery Jr. rush to the left for a loss of 1 yard to the Okla31. Tackled by Parnell Motley and Jalen Redmond.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [{
                                "playerInvolvedTypeId": 1,
                                "playerInvolvedType": "player",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1161730,
                                    "firstName": "John",
                                    "lastName": "Emery Jr.",
                                    "uniform": "4"
                                }
                            }, {
                                "playerInvolvedTypeId": 2,
                                "playerInvolvedType": "tackler",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 923080,
                                    "firstName": "Parnell",
                                    "lastName": "Motley",
                                    "uniform": "11"
                                }
                            }, {
                                "playerInvolvedTypeId": 3,
                                "playerInvolvedType": "assister",
                                "typeSequence": 1,
                                "player": {
                                    "playerId": 1107846,
                                    "firstName": "Jalen",
                                    "lastName": "Redmond",
                                    "uniform": "31"
                                }
                            }],
                            "direction": "L",
                            "yards": -1
                        }, {
                            "playId": 224.0,
                            "period": 4,
                            "time": "0:39",
                            "down": "3",
                            "distance": "10",
                            "awayScoreBefore": 28,
                            "awayScoreAfter": 28,
                            "homeScoreBefore": 63,
                            "homeScoreAfter": 63,
                            "yardLine": "Okla31",
                            "endYardLine": "Okla32",
                            "driveId": 24,
                            "startPossession": {
                                "teamId": 3481
                            },
                            "endPossession": {
                                "teamId": 3481
                            },
                            "isContinuation": false,
                            "rushType": {
                                "rushTypeId": 7,
                                "name": "Middle"
                            },
                            "playText": "Team rush to the middle for a loss of 1 yard to the Okla32.",
                            "playType": {
                                "playTypeId": 4,
                                "name": "Rush"
                            },
                            "playersInvolved": [],
                            "direction": "M",
                            "yards": -1
                        }],
                        "driveChart": [{
                            "driveId": 1,
                            "teamId": 3430,
                            "driveStats": {
                                "plays": 3,
                                "yards": -6,
                                "timeOfPossession": {
                                    "minutes": 2,
                                    "seconds": 5
                                },
                                "penaltyYards": 0,
                                "isRedZone": "false",
                                "firstDowns": 0,
                                "isScoringDrive": "false"
                            },
                            "driveStart": {
                                "period": 1,
                                "gameClock": {
                                    "minutes": 15,
                                    "seconds": 0
                                },
                                "yardsFromGoal": 75,
                                "yardLine": "OKLA 25",
                                "playType": {
                                    "playTypeId": 5,
                                    "name": "Kickoff"
                                },
                                "driveChartPlayName": "Kickoff"
                            },
                            "driveEnd": {
                                "period": 1,
                                "gameClock": {
                                    "minutes": 12,
                                    "seconds": 55
                                },
                                "yardsFromGoal": 81,
                                "yardLine": "OKLA 19",
                                "playType": {
                                    "playTypeId": 7,
                                    "name": "Punt"
                                },
                                "driveChartPlayName": "Punt"
                            }
                        }, {
                            "driveId": 2,
                            "teamId": 3481,
                            "driveStats": {
                                "plays": 3,
                                "yards": 42,
                                "timeOfPossession": {
                                    "minutes": 0,
                                    "seconds": 52
                                },
                                "penaltyYards": 0,
                                "isRedZone": "true",
                                "firstDowns": 2,
                                "isScoringDrive": "true"
                            },
                            "driveStart": {
                                "period": 1,
                                "gameClock": {
                                    "minutes": 12,
                                    "seconds": 55
                                },
                                "yardsFromGoal": 42,
                                "yardLine": "OKLA 42",
                                "playType": {
                                    "playTypeId": 7,
                                    "name": "Punt"
                                },
                                "driveChartPlayName": "Punt"
                            },
                            "driveEnd": {
                                "period": 1,
                                "gameClock": {
                                    "minutes": 12,
                                    "seconds": 3
                                },
                                "yardsFromGoal": 0,
                                "yardLine": "OKLA 0",
                                "playType": {
                                    "playTypeId": 37,
                                    "name": "Touchdown"
                                },
                                "driveChartPlayName": "Touchdown"
                            }
                        }, {
                            "driveId": 3,
                            "teamId": 3430,
                            "driveStats": {
                                "plays": 3,
                                "yards": 4,
                                "timeOfPossession": {
                                    "minutes": 0,
                                    "seconds": 54
                                },
                                "penaltyYards": -5,
                                "isRedZone": "false",
                                "firstDowns": 0,
                                "isScoringDrive": "false"
                            },
                            "driveStart": {
                                "period": 1,
                                "gameClock": {
                                    "minutes": 12,
                                    "seconds": 3
                                },
                                "yardsFromGoal": 75,
                                "yardLine": "OKLA 25",
                                "playType": {
                                    "playTypeId": 5,
                                    "name": "Kickoff"
                                },
                                "driveChartPlayName": "Kickoff"
                            },
                            "driveEnd": {
                                "period": 1,
                                "gameClock": {
                                    "minutes": 11,
                                    "seconds": 9
                                },
                                "yardsFromGoal": 76,
                                "yardLine": "OKLA 24",
                                "playType": {
                                    "playTypeId": 7,
                                    "name": "Punt"
                                },
                                "driveChartPlayName": "Punt"
                            }
                        }, {
                            "driveId": 4,
                            "teamId": 3481,
                            "driveStats": {
                                "plays": 3,
                                "yards": 8,
                                "timeOfPossession": {
                                    "minutes": 1,
                                    "seconds": 14
                                },
                                "penaltyYards": 0,
                                "isRedZone": "false",
                                "firstDowns": 0,
                                "isScoringDrive": "false"
                            },
                            "driveStart": {
                                "period": 1,
                                "gameClock": {
                                    "minutes": 11,
                                    "seconds": 9
                                },
                                "yardsFromGoal": 73,
                                "yardLine": "LSU 27",
                                "playType": {
                                    "playTypeId": 7,
                                    "name": "Punt"
                                },
                                "driveChartPlayName": "Punt"
                            },
                            "driveEnd": {
                                "period": 1,
                                "gameClock": {
                                    "minutes": 9,
                                    "seconds": 55
                                },
                                "yardsFromGoal": 65,
                                "yardLine": "LSU 35",
                                "playType": {
                                    "playTypeId": 7,
                                    "name": "Punt"
                                },
                                "driveChartPlayName": "Punt"
                            }
                        }, {
                            "driveId": 5,
                            "teamId": 3430,
                            "driveStats": {
                                "plays": 5,
                                "yards": 74,
                                "timeOfPossession": {
                                    "minutes": 2,
                                    "seconds": 21
                                },
                                "penaltyYards": -5,
                                "isRedZone": "true",
                                "firstDowns": 2,
                                "isScoringDrive": "true"
                            },
                            "driveStart": {
                                "period": 1,
                                "gameClock": {
                                    "minutes": 9,
                                    "seconds": 55
                                },
                                "yardsFromGoal": 69,
                                "yardLine": "OKLA 31",
                                "playType": {
                                    "playTypeId": 7,
                                    "name": "Punt"
                                },
                                "driveChartPlayName": "Punt"
                            },
                            "driveEnd": {
                                "period": 1,
                                "gameClock": {
                                    "minutes": 7,
                                    "seconds": 34
                                },
                                "yardsFromGoal": 0,
                                "yardLine": "LSU 0",
                                "playType": {
                                    "playTypeId": 37,
                                    "name": "Touchdown"
                                },
                                "driveChartPlayName": "Touchdown"
                            }
                        }, {
                            "driveId": 6,
                            "teamId": 3481,
                            "driveStats": {
                                "plays": 9,
                                "yards": 75,
                                "timeOfPossession": {
                                    "minutes": 3,
                                    "seconds": 10
                                },
                                "penaltyYards": 0,
                                "isRedZone": "true",
                                "firstDowns": 4,
                                "isScoringDrive": "true"
                            },
                            "driveStart": {
                                "period": 1,
                                "gameClock": {
                                    "minutes": 7,
                                    "seconds": 34
                                },
                                "yardsFromGoal": 75,
                                "yardLine": "LSU 25",
                                "playType": {
                                    "playTypeId": 5,
                                    "name": "Kickoff"
                                },
                                "driveChartPlayName": "Kickoff"
                            },
                            "driveEnd": {
                                "period": 1,
                                "gameClock": {
                                    "minutes": 4,
                                    "seconds": 24
                                },
                                "yardsFromGoal": 0,
                                "yardLine": "OKLA 0",
                                "playType": {
                                    "playTypeId": 37,
                                    "name": "Touchdown"
                                },
                                "driveChartPlayName": "Touchdown"
                            }
                        }, {
                            "driveId": 7,
                            "teamId": 3430,
                            "driveStats": {
                                "plays": 3,
                                "yards": 0,
                                "timeOfPossession": {
                                    "minutes": 0,
                                    "seconds": 37
                                },
                                "penaltyYards": 0,
                                "isRedZone": "false",
                                "firstDowns": 0,
                                "isScoringDrive": "false"
                            },
                            "driveStart": {
                                "period": 1,
                                "gameClock": {
                                    "minutes": 4,
                                    "seconds": 24
                                },
                                "yardsFromGoal": 62,
                                "yardLine": "OKLA 38",
                                "playType": {
                                    "playTypeId": 5,
                                    "name": "Kickoff"
                                },
                                "driveChartPlayName": "Kickoff"
                            },
                            "driveEnd": {
                                "period": 1,
                                "gameClock": {
                                    "minutes": 3,
                                    "seconds": 47
                                },
                                "yardsFromGoal": 62,
                                "yardLine": "OKLA 38",
                                "playType": {
                                    "playTypeId": 7,
                                    "name": "Punt"
                                },
                                "driveChartPlayName": "Punt"
                            }
                        }, {
                            "driveId": 8,
                            "teamId": 3481,
                            "driveStats": {
                                "plays": 6,
                                "yards": 86,
                                "timeOfPossession": {
                                    "minutes": 2,
                                    "seconds": 31
                                },
                                "penaltyYards": 0,
                                "isRedZone": "false",
                                "firstDowns": 3,
                                "isScoringDrive": "true"
                            },
                            "driveStart": {
                                "period": 1,
                                "gameClock": {
                                    "minutes": 3,
                                    "seconds": 47
                                },
                                "yardsFromGoal": 86,
                                "yardLine": "LSU 14",
                                "playType": {
                                    "playTypeId": 7,
                                    "name": "Punt"
                                },
                                "driveChartPlayName": "Punt"
                            },
                            "driveEnd": {
                                "period": 1,
                                "gameClock": {
                                    "minutes": 1,
                                    "seconds": 16
                                },
                                "yardsFromGoal": 0,
                                "yardLine": "OKLA 0",
                                "playType": {
                                    "playTypeId": 37,
                                    "name": "Touchdown"
                                },
                                "driveChartPlayName": "Touchdown"
                            }
                        }, {
                            "driveId": 9,
                            "teamId": 3430,
                            "driveStats": {
                                "plays": 6,
                                "yards": 19,
                                "timeOfPossession": {
                                    "minutes": 2,
                                    "seconds": 1
                                },
                                "penaltyYards": 0,
                                "isRedZone": "false",
                                "firstDowns": 1,
                                "isScoringDrive": "false"
                            },
                            "driveStart": {
                                "period": 1,
                                "gameClock": {
                                    "minutes": 1,
                                    "seconds": 16
                                },
                                "yardsFromGoal": 75,
                                "yardLine": "OKLA 25",
                                "playType": {
                                    "playTypeId": 5,
                                    "name": "Kickoff"
                                },
                                "driveChartPlayName": "Kickoff"
                            },
                            "driveEnd": {
                                "period": 2,
                                "gameClock": {
                                    "minutes": 14,
                                    "seconds": 15
                                },
                                "yardsFromGoal": 56,
                                "yardLine": "OKLA 44",
                                "playType": {
                                    "playTypeId": 7,
                                    "name": "Punt"
                                },
                                "driveChartPlayName": "Punt"
                            }
                        }, {
                            "driveId": 10,
                            "teamId": 3481,
                            "driveStats": {
                                "plays": 6,
                                "yards": 65,
                                "timeOfPossession": {
                                    "minutes": 2,
                                    "seconds": 2
                                },
                                "penaltyYards": 15,
                                "isRedZone": "false",
                                "firstDowns": 4,
                                "isScoringDrive": "true"
                            },
                            "driveStart": {
                                "period": 2,
                                "gameClock": {
                                    "minutes": 14,
                                    "seconds": 15
                                },
                                "yardsFromGoal": 80,
                                "yardLine": "LSU 20",
                                "playType": {
                                    "playTypeId": 7,
                                    "name": "Punt"
                                },
                                "driveChartPlayName": "Punt"
                            },
                            "driveEnd": {
                                "period": 2,
                                "gameClock": {
                                    "minutes": 12,
                                    "seconds": 13
                                },
                                "yardsFromGoal": 0,
                                "yardLine": "OKLA 0",
                                "playType": {
                                    "playTypeId": 37,
                                    "name": "Touchdown"
                                },
                                "driveChartPlayName": "Touchdown"
                            }
                        }, {
                            "driveId": 11,
                            "teamId": 3430,
                            "driveStats": {
                                "plays": 1,
                                "yards": 0,
                                "timeOfPossession": {
                                    "minutes": 0,
                                    "seconds": 10
                                },
                                "penaltyYards": 0,
                                "isRedZone": "false",
                                "firstDowns": 0,
                                "isScoringDrive": "false"
                            },
                            "driveStart": {
                                "period": 2,
                                "gameClock": {
                                    "minutes": 12,
                                    "seconds": 13
                                },
                                "yardsFromGoal": 75,
                                "yardLine": "OKLA 25",
                                "playType": {
                                    "playTypeId": 5,
                                    "name": "Kickoff"
                                },
                                "driveChartPlayName": "Kickoff"
                            },
                            "driveEnd": {
                                "period": 2,
                                "gameClock": {
                                    "minutes": 12,
                                    "seconds": 3
                                },
                                "yardsFromGoal": 75,
                                "yardLine": "OKLA 25",
                                "playType": {
                                    "playTypeId": 9,
                                    "name": "Intercepted Pass"
                                },
                                "driveChartPlayName": "Intercepted Pass"
                            }
                        }, {
                            "driveId": 12,
                            "teamId": 3481,
                            "driveStats": {
                                "plays": 6,
                                "yards": 60,
                                "timeOfPossession": {
                                    "minutes": 2,
                                    "seconds": 46
                                },
                                "penaltyYards": -15,
                                "isRedZone": "false",
                                "firstDowns": 3,
                                "isScoringDrive": "true"
                            },
                            "driveStart": {
                                "period": 2,
                                "gameClock": {
                                    "minutes": 12,
                                    "seconds": 3
                                },
                                "yardsFromGoal": 45,
                                "yardLine": "OKLA 45",
                                "playType": {
                                    "playTypeId": 9,
                                    "name": "Intercepted Pass"
                                },
                                "driveChartPlayName": "Intercepted Pass"
                            },
                            "driveEnd": {
                                "period": 2,
                                "gameClock": {
                                    "minutes": 9,
                                    "seconds": 17
                                },
                                "yardsFromGoal": 0,
                                "yardLine": "OKLA 0",
                                "playType": {
                                    "playTypeId": 37,
                                    "name": "Touchdown"
                                },
                                "driveChartPlayName": "Touchdown"
                            }
                        }, {
                            "driveId": 13,
                            "teamId": 3430,
                            "driveStats": {
                                "plays": 10,
                                "yards": 56,
                                "timeOfPossession": {
                                    "minutes": 4,
                                    "seconds": 32
                                },
                                "penaltyYards": 19,
                                "isRedZone": "true",
                                "firstDowns": 4,
                                "isScoringDrive": "true"
                            },
                            "driveStart": {
                                "period": 2,
                                "gameClock": {
                                    "minutes": 9,
                                    "seconds": 17
                                },
                                "yardsFromGoal": 75,
                                "yardLine": "OKLA 25",
                                "playType": {
                                    "playTypeId": 5,
                                    "name": "Kickoff"
                                },
                                "driveChartPlayName": "Kickoff"
                            },
                            "driveEnd": {
                                "period": 2,
                                "gameClock": {
                                    "minutes": 4,
                                    "seconds": 45
                                },
                                "yardsFromGoal": 0,
                                "yardLine": "LSU 0",
                                "playType": {
                                    "playTypeId": 37,
                                    "name": "Touchdown"
                                },
                                "driveChartPlayName": "Touchdown"
                            }
                        }, {
                            "driveId": 14,
                            "teamId": 3481,
                            "driveStats": {
                                "plays": 2,
                                "yards": 75,
                                "timeOfPossession": {
                                    "minutes": 0,
                                    "seconds": 27
                                },
                                "penaltyYards": 0,
                                "isRedZone": "false",
                                "firstDowns": 2,
                                "isScoringDrive": "true"
                            },
                            "driveStart": {
                                "period": 2,
                                "gameClock": {
                                    "minutes": 4,
                                    "seconds": 45
                                },
                                "yardsFromGoal": 75,
                                "yardLine": "LSU 25",
                                "playType": {
                                    "playTypeId": 5,
                                    "name": "Kickoff"
                                },
                                "driveChartPlayName": "Kickoff"
                            },
                            "driveEnd": {
                                "period": 2,
                                "gameClock": {
                                    "minutes": 4,
                                    "seconds": 18
                                },
                                "yardsFromGoal": 0,
                                "yardLine": "LSU 0",
                                "playType": {
                                    "playTypeId": 37,
                                    "name": "Touchdown"
                                },
                                "driveChartPlayName": "Touchdown"
                            }
                        }, {
                            "driveId": 15,
                            "teamId": 3430,
                            "driveStats": {
                                "plays": 3,
                                "yards": 5,
                                "timeOfPossession": {
                                    "minutes": 1,
                                    "seconds": 24
                                },
                                "penaltyYards": -10,
                                "isRedZone": "false",
                                "firstDowns": 0,
                                "isScoringDrive": "false"
                            },
                            "driveStart": {
                                "period": 2,
                                "gameClock": {
                                    "minutes": 4,
                                    "seconds": 18
                                },
                                "yardsFromGoal": 75,
                                "yardLine": "OKLA 25",
                                "playType": {
                                    "playTypeId": 5,
                                    "name": "Kickoff"
                                },
                                "driveChartPlayName": "Kickoff"
                            },
                            "driveEnd": {
                                "period": 2,
                                "gameClock": {
                                    "minutes": 2,
                                    "seconds": 54
                                },
                                "yardsFromGoal": 80,
                                "yardLine": "OKLA 20",
                                "playType": {
                                    "playTypeId": 7,
                                    "name": "Punt"
                                },
                                "driveChartPlayName": "Punt"
                            }
                        }, {
                            "driveId": 16,
                            "teamId": 3481,
                            "driveStats": {
                                "plays": 5,
                                "yards": 61,
                                "timeOfPossession": {
                                    "minutes": 2,
                                    "seconds": 4
                                },
                                "penaltyYards": 2,
                                "isRedZone": "true",
                                "firstDowns": 2,
                                "isScoringDrive": "true"
                            },
                            "driveStart": {
                                "period": 2,
                                "gameClock": {
                                    "minutes": 2,
                                    "seconds": 54
                                },
                                "yardsFromGoal": 63,
                                "yardLine": "LSU 37",
                                "playType": {
                                    "playTypeId": 7,
                                    "name": "Punt"
                                },
                                "driveChartPlayName": "Punt"
                            },
                            "driveEnd": {
                                "period": 2,
                                "gameClock": {
                                    "minutes": 0,
                                    "seconds": 50
                                },
                                "yardsFromGoal": 0,
                                "yardLine": "OKLA 0",
                                "playType": {
                                    "playTypeId": 37,
                                    "name": "Touchdown"
                                },
                                "driveChartPlayName": "Touchdown"
                            }
                        }, {
                            "driveId": 17,
                            "teamId": 3430,
                            "driveStats": {
                                "plays": 2,
                                "yards": 8,
                                "timeOfPossession": {
                                    "minutes": 0,
                                    "seconds": 50
                                },
                                "penaltyYards": -10,
                                "isRedZone": "false",
                                "firstDowns": 0,
                                "isScoringDrive": "false"
                            },
                            "driveStart": {
                                "period": 2,
                                "gameClock": {
                                    "minutes": 0,
                                    "seconds": 50
                                },
                                "yardsFromGoal": 75,
                                "yardLine": "OKLA 25",
                                "playType": {
                                    "playTypeId": 5,
                                    "name": "Kickoff"
                                },
                                "driveChartPlayName": "Kickoff"
                            },
                            "driveEnd": {
                                "period": 2,
                                "gameClock": {
                                    "minutes": 0,
                                    "seconds": 0
                                },
                                "yardsFromGoal": 85,
                                "yardLine": "OKLA 15",
                                "playType": {
                                    "playTypeId": 12,
                                    "name": "End of Quarter"
                                },
                                "driveChartPlayName": "End of Quarter"
                            }
                        }, {
                            "driveId": 18,
                            "teamId": 3481,
                            "driveStats": {
                                "plays": 13,
                                "yards": 74,
                                "timeOfPossession": {
                                    "minutes": 4,
                                    "seconds": 49
                                },
                                "penaltyYards": 0,
                                "isRedZone": "true",
                                "firstDowns": 3,
                                "isScoringDrive": "true"
                            },
                            "driveStart": {
                                "period": 3,
                                "gameClock": {
                                    "minutes": 15,
                                    "seconds": 0
                                },
                                "yardsFromGoal": 74,
                                "yardLine": "LSU 26",
                                "playType": {
                                    "playTypeId": 5,
                                    "name": "Kickoff"
                                },
                                "driveChartPlayName": "Kickoff"
                            },
                            "driveEnd": {
                                "period": 3,
                                "gameClock": {
                                    "minutes": 10,
                                    "seconds": 11
                                },
                                "yardsFromGoal": 0,
                                "yardLine": "OKLA 0",
                                "playType": {
                                    "playTypeId": 37,
                                    "name": "Touchdown"
                                },
                                "driveChartPlayName": "Touchdown"
                            }
                        }, {
                            "driveId": 19,
                            "teamId": 3430,
                            "driveStats": {
                                "plays": 13,
                                "yards": 75,
                                "timeOfPossession": {
                                    "minutes": 5,
                                    "seconds": 52
                                },
                                "penaltyYards": 0,
                                "isRedZone": "true",
                                "firstDowns": 4,
                                "isScoringDrive": "true"
                            },
                            "driveStart": {
                                "period": 3,
                                "gameClock": {
                                    "minutes": 10,
                                    "seconds": 11
                                },
                                "yardsFromGoal": 75,
                                "yardLine": "OKLA 25",
                                "playType": {
                                    "playTypeId": 5,
                                    "name": "Kickoff"
                                },
                                "driveChartPlayName": "Kickoff"
                            },
                            "driveEnd": {
                                "period": 3,
                                "gameClock": {
                                    "minutes": 4,
                                    "seconds": 19
                                },
                                "yardsFromGoal": 0,
                                "yardLine": "LSU 0",
                                "playType": {
                                    "playTypeId": 37,
                                    "name": "Touchdown"
                                },
                                "driveChartPlayName": "Touchdown"
                            }
                        }, {
                            "driveId": 20,
                            "teamId": 3481,
                            "driveStats": {
                                "plays": 10,
                                "yards": 47,
                                "timeOfPossession": {
                                    "minutes": 5,
                                    "seconds": 13
                                },
                                "penaltyYards": 0,
                                "isRedZone": "false",
                                "firstDowns": 3,
                                "isScoringDrive": "false"
                            },
                            "driveStart": {
                                "period": 3,
                                "gameClock": {
                                    "minutes": 4,
                                    "seconds": 19
                                },
                                "yardsFromGoal": 75,
                                "yardLine": "LSU 25",
                                "playType": {
                                    "playTypeId": 5,
                                    "name": "Kickoff"
                                },
                                "driveChartPlayName": "Kickoff"
                            },
                            "driveEnd": {
                                "period": 4,
                                "gameClock": {
                                    "minutes": 14,
                                    "seconds": 6
                                },
                                "yardsFromGoal": 28,
                                "yardLine": "OKLA 28",
                                "playType": {
                                    "playTypeId": 36,
                                    "name": "Missed Field Goal"
                                },
                                "driveChartPlayName": "Missed Field Goal"
                            }
                        }, {
                            "driveId": 21,
                            "teamId": 3430,
                            "driveStats": {
                                "plays": 9,
                                "yards": 72,
                                "timeOfPossession": {
                                    "minutes": 4,
                                    "seconds": 27
                                },
                                "penaltyYards": 0,
                                "isRedZone": "true",
                                "firstDowns": 4,
                                "isScoringDrive": "true"
                            },
                            "driveStart": {
                                "period": 4,
                                "gameClock": {
                                    "minutes": 14,
                                    "seconds": 6
                                },
                                "yardsFromGoal": 72,
                                "yardLine": "OKLA 28",
                                "playType": {
                                    "playTypeId": 36,
                                    "name": "Missed Field Goal"
                                },
                                "driveChartPlayName": "Missed Field Goal"
                            },
                            "driveEnd": {
                                "period": 4,
                                "gameClock": {
                                    "minutes": 9,
                                    "seconds": 39
                                },
                                "yardsFromGoal": 0,
                                "yardLine": "LSU 0",
                                "playType": {
                                    "playTypeId": 37,
                                    "name": "Touchdown"
                                },
                                "driveChartPlayName": "Touchdown"
                            }
                        }, {
                            "driveId": 22,
                            "teamId": 3481,
                            "driveStats": {
                                "plays": 9,
                                "yards": 75,
                                "timeOfPossession": {
                                    "minutes": 5,
                                    "seconds": 40
                                },
                                "penaltyYards": 0,
                                "isRedZone": "true",
                                "firstDowns": 4,
                                "isScoringDrive": "true"
                            },
                            "driveStart": {
                                "period": 4,
                                "gameClock": {
                                    "minutes": 9,
                                    "seconds": 39
                                },
                                "yardsFromGoal": 75,
                                "yardLine": "LSU 25",
                                "playType": {
                                    "playTypeId": 5,
                                    "name": "Kickoff"
                                },
                                "driveChartPlayName": "Kickoff"
                            },
                            "driveEnd": {
                                "period": 4,
                                "gameClock": {
                                    "minutes": 3,
                                    "seconds": 59
                                },
                                "yardsFromGoal": 0,
                                "yardLine": "OKLA 0",
                                "playType": {
                                    "playTypeId": 37,
                                    "name": "Touchdown"
                                },
                                "driveChartPlayName": "Touchdown"
                            }
                        }, {
                            "driveId": 23,
                            "teamId": 3430,
                            "driveStats": {
                                "plays": 4,
                                "yards": 16,
                                "timeOfPossession": {
                                    "minutes": 1,
                                    "seconds": 49
                                },
                                "penaltyYards": -10,
                                "isRedZone": "false",
                                "firstDowns": 0,
                                "isScoringDrive": "false"
                            },
                            "driveStart": {
                                "period": 4,
                                "gameClock": {
                                    "minutes": 3,
                                    "seconds": 59
                                },
                                "yardsFromGoal": 75,
                                "yardLine": "OKLA 25",
                                "playType": {
                                    "playTypeId": 5,
                                    "name": "Kickoff"
                                },
                                "driveChartPlayName": "Kickoff"
                            },
                            "driveEnd": {
                                "period": 4,
                                "gameClock": {
                                    "minutes": 2,
                                    "seconds": 10
                                },
                                "yardsFromGoal": 69,
                                "yardLine": "OKLA 31",
                                "playType": {
                                    "playTypeId": 40,
                                    "name": "Downs"
                                },
                                "driveChartPlayName": "Downs"
                            }
                        }, {
                            "driveId": 24,
                            "teamId": 3481,
                            "driveStats": {
                                "plays": 3,
                                "yards": -1,
                                "timeOfPossession": {
                                    "minutes": 2,
                                    "seconds": 10
                                },
                                "penaltyYards": 0,
                                "isRedZone": "false",
                                "firstDowns": 0,
                                "isScoringDrive": "false"
                            },
                            "driveStart": {
                                "period": 4,
                                "gameClock": {
                                    "minutes": 2,
                                    "seconds": 10
                                },
                                "yardsFromGoal": 31,
                                "yardLine": "OKLA 31",
                                "playType": {
                                    "playTypeId": 40,
                                    "name": "Downs"
                                },
                                "driveChartPlayName": "Downs"
                            },
                            "driveEnd": {
                                "period": 4,
                                "gameClock": {
                                    "minutes": 0,
                                    "seconds": 0
                                },
                                "yardsFromGoal": 31,
                                "yardLine": "OKLA 31",
                                "playType": {
                                    "playTypeId": 39,
                                    "name": "End of Game"
                                },
                                "driveChartPlayName": "End of Game"
                            }
                        }]
                    }]
                }]
            }
        }
    }]
}

const StatsController = {

  insightsMock: async (req, res) => {
    try {
      res.status(200).send({
        "status": "OK",
        "recordCount": 1,
        "startTimestamp": "2018-12-09T18:17:24.643-06:00",
        "endTimestamp": "2018-12-09T18:17:25.616-06:00",
        "timeTaken": 0.9727931999999999,
        "endpointURI": "/v1/stats/football/nfl/events/2041018/?insights=true",
        "apiResults": [
          {
            "sportId": 4,
            "name": "Football",
            "league": {
              "leagueId": 8,
              "name": "National Football League",
              "abbreviation": "NFL",
              "displayName": "National Football League",
              "season": {
                "season": 2018,
                "name": "2018-2019 NFL Season",
                "isActive": true,
                "eventType": [
                  {
                    "eventTypeId": 1,
                    "name": "Regular Season",
                    "events": [
                      {
                        "eventId": 2041018,
                        "startDate": [
                          {
                            "year": 2018,
                            "month": 12,
                            "date": 9,
                            "hour": 13,
                            "minute": 5,
                            "full": "2018-12-09T13:05:00",
                            "dateType": "Local"
                          },
                          {
                            "year": 2018,
                            "month": 12,
                            "date": 9,
                            "hour": 21,
                            "minute": 5,
                            "full": "2018-12-09T21:05:00",
                            "dateType": "UTC"
                          }
                        ],
                        "isTba": false,
                        "isDataConfirmed": {
                          "box": false,
                          "pbp": false,
                          "driveChart": false,
                          "score": false,
                          "participationStats": false
                        },
                        "eventStatus": {
                          "eventStatusId": 2,
                          "period": 4,
                          "minutes": 2,
                          "seconds": 0,
                          "teamPossessionId": 359,
                          "yardsFromGoal": 33,
                          "down": 1,
                          "distance": 10,
                          "isActive": true,
                          "name": "In-Progress",
                          "isUnderReview": false,
                          "isInjuryTimeout": false
                        },
                        "lastPlay": {
                          "playId": 802,
                          "period": 4,
                          "time": "2:39",
                          "down": "3",
                          "distance": "3",
                          "awayScoreBefore": 14,
                          "awayScoreAfter": 14,
                          "homeScoreBefore": 20,
                          "homeScoreAfter": 20,
                          "yardLine": "Den39",
                          "endYardLine": "Den33",
                          "driveId": 24,
                          "startPossession": {
                            "teamId": 359
                          },
                          "endPossession": {
                            "teamId": 359
                          },
                          "isContinuation": false,
                          "isReview": false,
                          "playText": "Nick Mullens pass to the middle to Trent Taylor for 6 yards to the Den33. Tackled by Justin Simmons.",
                          "playType": {
                            "playTypeId": 1,
                            "name": "Pass"
                          },
                          "playersInvolved": [
                            {
                              "playerInvolvedTypeId": 1,
                              "playerInvolvedType": "player",
                              "typeSequence": 1,
                              "player": {
                                "playerId": 748309,
                                "firstName": "Nick",
                                "lastName": "Mullens",
                                "uniform": "4"
                              }
                            },
                            {
                              "playerInvolvedTypeId": 2,
                              "playerInvolvedType": "tackler",
                              "typeSequence": 1,
                              "player": {
                                "playerId": 691479,
                                "firstName": "Justin",
                                "lastName": "Simmons",
                                "uniform": "31"
                              }
                            },
                            {
                              "playerInvolvedTypeId": 5,
                              "playerInvolvedType": "target",
                              "typeSequence": 1,
                              "player": {
                                "playerId": 733849,
                                "firstName": "Trent",
                                "lastName": "Taylor"
                              }
                            }
                          ],
                          "direction": "M",
                          "yards": 6
                        },
                        "venue": {
                          "venueId": 13672,
                          "name": "Levi's Stadium",
                          "city": "Santa Clara",
                          "state": {
                            "stateId": 5,
                            "name": "California",
                            "abbreviation": "CA"
                          },
                          "country": {
                            "countryId": 1,
                            "name": "United States",
                            "abbreviation": "USA"
                          }
                        },
                        "tvStations": [
                          {
                            "tvStationId": 275,
                            "name": "CBS",
                            "callLetters": "CBS",
                            "networkType": {
                              "networkTypeId": 1,
                              "name": "National"
                            },
                            "country": {
                              "countryId": 1,
                              "name": "United States",
                              "abbreviation": "USA"
                            }
                          }
                        ],
                        "teams": [
                          {
                            "teamId": 359,
                            "location": "San Francisco",
                            "nickname": "49ers",
                            "abbreviation": "SF",
                            "teamLocationType": {
                              "teamLocationTypeId": 1,
                              "name": "home"
                            },
                            "record": {
                              "wins": 2,
                              "losses": 10,
                              "ties": 0,
                              "percentage": ".167"
                            },
                            "score": 20,
                            "timeoutsLeft": 1,
                            "isWinner": false
                          },
                          {
                            "teamId": 332,
                            "location": "Denver",
                            "nickname": "Broncos",
                            "abbreviation": "Den",
                            "teamLocationType": {
                              "teamLocationTypeId": 2,
                              "name": "away"
                            },
                            "record": {
                              "wins": 6,
                              "losses": 6,
                              "ties": 0,
                              "percentage": ".500"
                            },
                            "score": 14,
                            "timeoutsLeft": 0,
                            "isWinner": false
                          }
                        ],
                        "week": 14,
                        "coverageLevel": {
                          "coverageLevelId": 8,
                          "details": "STATS Primary Feed",
                          "name": "Level 1"
                        },
                        "gameDetail": {},
                        "scoringSummaries": [
                          {
                            "period": 1,
                            "scores": [
                              {
                                "time": {
                                  "minutes": 10,
                                  "seconds": 23
                                },
                                "teamId": 359,
                                "scoreType": {
                                  "scoreTypeId": 3,
                                  "name": "Field Goal Attempt"
                                },
                                "scoringPlayerId": 167377,
                                "distance": 40,
                                "summaryText": "Robbie Gould 40 yd FG",
                                "drive": {
                                  "driveId": 1,
                                  "plays": 9,
                                  "yards": 56,
                                  "minutes": 4,
                                  "seconds": 33
                                },
                                "currentScore": {
                                  "leaderTeamId": 359,
                                  "leadingScore": 3,
                                  "trailingScore": 0
                                }
                              }
                            ]
                          },
                          {
                            "period": 2,
                            "scores": [
                              {
                                "time": {
                                  "minutes": 13,
                                  "seconds": 1
                                },
                                "teamId": 359,
                                "scoreType": {
                                  "scoreTypeId": 3,
                                  "name": "Field Goal Attempt"
                                },
                                "scoringPlayerId": 167377,
                                "distance": 29,
                                "summaryText": "Robbie Gould 29 yd FG",
                                "drive": {
                                  "driveId": 6,
                                  "plays": 0,
                                  "yards": 0,
                                  "minutes": 0,
                                  "seconds": 12
                                },
                                "currentScore": {
                                  "leaderTeamId": 359,
                                  "leadingScore": 6,
                                  "trailingScore": 0
                                }
                              },
                              {
                                "time": {
                                  "minutes": 9,
                                  "seconds": 47
                                },
                                "teamId": 359,
                                "scoreType": {
                                  "scoreTypeId": 2,
                                  "name": "Passing TD"
                                },
                                "scoringPlayerId": 733672,
                                "passerId": 748309,
                                "pat": {
                                  "patTypeId": 14,
                                  "points": 1,
                                  "isGood": true,
                                  "patPlayerId": 167377
                                },
                                "distance": 85,
                                "summaryText": "George Kittle 85 yd pass from Nick Mullens (Robbie Gould kick)",
                                "drive": {
                                  "driveId": 8,
                                  "plays": 1,
                                  "yards": 85,
                                  "minutes": 0,
                                  "seconds": 13
                                },
                                "currentScore": {
                                  "leaderTeamId": 359,
                                  "leadingScore": 13,
                                  "trailingScore": 0
                                }
                              },
                              {
                                "time": {
                                  "minutes": 0,
                                  "seconds": 8
                                },
                                "teamId": 359,
                                "scoreType": {
                                  "scoreTypeId": 2,
                                  "name": "Passing TD"
                                },
                                "scoringPlayerId": 837820,
                                "passerId": 748309,
                                "pat": {
                                  "patTypeId": 14,
                                  "points": 1,
                                  "isGood": true,
                                  "patPlayerId": 167377
                                },
                                "distance": 1,
                                "summaryText": "Dante Pettis 1 yd pass from Nick Mullens (Robbie Gould kick)",
                                "drive": {
                                  "driveId": 12,
                                  "plays": 7,
                                  "yards": 72,
                                  "minutes": 0,
                                  "seconds": 59
                                },
                                "currentScore": {
                                  "leaderTeamId": 359,
                                  "leadingScore": 20,
                                  "trailingScore": 0
                                }
                              }
                            ]
                          },
                          {
                            "period": 3,
                            "scores": [
                              {
                                "time": {
                                  "minutes": 6,
                                  "seconds": 5
                                },
                                "teamId": 332,
                                "scoreType": {
                                  "scoreTypeId": 1,
                                  "name": "Rushing TD"
                                },
                                "scoringPlayerId": 747861,
                                "pat": {
                                  "patTypeId": 14,
                                  "points": 1,
                                  "isGood": true,
                                  "patPlayerId": 513098
                                },
                                "distance": 3,
                                "summaryText": "Phillip Lindsay 3 yd run (Brandon McManus kick)",
                                "drive": {
                                  "driveId": 16,
                                  "plays": 11,
                                  "yards": 56,
                                  "minutes": 4,
                                  "seconds": 54
                                },
                                "currentScore": {
                                  "leaderTeamId": 359,
                                  "leadingScore": 20,
                                  "trailingScore": 7
                                }
                              }
                            ]
                          },
                          {
                            "period": 4,
                            "scores": [
                              {
                                "time": {
                                  "minutes": 3,
                                  "seconds": 53
                                },
                                "teamId": 332,
                                "scoreType": {
                                  "scoreTypeId": 2,
                                  "name": "Passing TD"
                                },
                                "scoringPlayerId": 748755,
                                "passerId": 338280,
                                "pat": {
                                  "patTypeId": 14,
                                  "points": 1,
                                  "isGood": true,
                                  "patPlayerId": 513098
                                },
                                "distance": 1,
                                "summaryText": "DaeSean Hamilton 1 yd pass from Case Keenum (Brandon McManus kick)",
                                "drive": {
                                  "driveId": 23,
                                  "plays": 4,
                                  "yards": 3,
                                  "minutes": 0,
                                  "seconds": 21
                                },
                                "currentScore": {
                                  "leaderTeamId": 359,
                                  "leadingScore": 20,
                                  "trailingScore": 14
                                }
                              }
                            ]
                          }
                        ],
                        "insights": [
                          {
                            "sequenceNumber": 1,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "Pre-Game",
                              "period": 0,
                              "time": 0
                            },
                            "text": "San Francisco has five takeaways this year, the fewest by any team through 12 games in the Super Bowl era, and has an NFL-worst -20 turnover margin. Denver has nine takeaways and one giveaway during its three-game win streak, and its +8 turnover margin since Week 11 leads the NFL.",
                            "characterCount": 281,
                            "teams": []
                          },
                          {
                            "sequenceNumber": 2,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "Pre-Game",
                              "period": 0,
                              "time": 0
                            },
                            "text": "Phillip Lindsay rushed for a career-high 157 yards and two touchdowns last week, joining Mike Anderson and Clinton Portis as the only Bronco rookies with 150+ rushing yards and 2+ rushing TD in a game. He is the third rookie to have such a game since 2015, along with Leonard Fournette and David Johnson.",
                            "characterCount": 304,
                            "teams": [
                              {
                                "teamId": 332,
                                "players": [
                                  {
                                    "player": {
                                      "playerId": 747861,
                                      "firstName": "Phillip",
                                      "lastName": "Lindsay",
                                      "uniform": "30"
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "sequenceNumber": 3,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "Pre-Game",
                              "period": 0,
                              "time": 0
                            },
                            "text": "Dante Pettis had 129 receiving yards last week, the most by a 49er rookie since Jerry Rice had 241 on December 9, 1985.",
                            "characterCount": 119,
                            "teams": [
                              {
                                "teamId": 359,
                                "players": [
                                  {
                                    "player": {
                                      "playerId": 837820,
                                      "firstName": "Dante",
                                      "lastName": "Pettis",
                                      "uniform": "18"
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "sequenceNumber": 4,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "1st Quarter",
                              "period": 1,
                              "time": 0
                            },
                            "text": "The 49ers kicked a field goal after a nine-play opening drive, their most plays on an opening drive since Week 16 of last season vs. Jacksonville.",
                            "characterCount": 146,
                            "teams": [
                              {
                                "teamId": 359
                              }
                            ]
                          },
                          {
                            "sequenceNumber": 5,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "1st Quarter",
                              "period": 1,
                              "time": 0
                            },
                            "text": "The 49ers have now forced their opponents into a 3-and-out on their opening drive in six of the last seven games.",
                            "characterCount": 113,
                            "teams": [
                              {
                                "teamId": 359
                              }
                            ]
                          },
                          {
                            "sequenceNumber": 6,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "1st Quarter",
                              "period": 1,
                              "time": 0
                            },
                            "text": "With his 52-yard catch, George Kittle now has 987 receiving yards for the season, surpassing Vernon Davis' 965 from the 2009 season for most by a tight end in franchise history.",
                            "characterCount": 177,
                            "teams": [
                              {
                                "teamId": 359,
                                "players": [
                                  {
                                    "player": {
                                      "playerId": 733672,
                                      "firstName": "George",
                                      "lastName": "Kittle",
                                      "uniform": "85"
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "sequenceNumber": 7,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "1st Quarter",
                              "period": 1,
                              "time": 0
                            },
                            "text": "Since the start of the Broncos' winning streak in Week 11, Denver's four games have had a combined four field goals and zero touchdowns in the first quarter. Four straight games without a first-quarter TD (scored or allowed) are the longest streak in the NFL this season.",
                            "characterCount": 271,
                            "teams": [
                              {
                                "teamId": 332
                              }
                            ]
                          },
                          {
                            "sequenceNumber": 8,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "2nd Quarter",
                              "period": 2,
                              "time": 0
                            },
                            "text": "San Francisco got down to the Denver 4-yard line but was forced to settle for a field goal. Entering this week, the 49ers ranked 31st in the NFL in red-zone efficiency, scoring a touchdown on just 44.7 percent of their red-zone drives.",
                            "characterCount": 235,
                            "teams": [
                              {
                                "teamId": 359
                              }
                            ]
                          },
                          {
                            "sequenceNumber": 9,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "2nd Quarter",
                              "period": 2,
                              "time": 0
                            },
                            "text": "George Kittle's 85-yard TD catch was the longest touchdown by a tight end in franchise history. It was the longest by any 49er since Brandon Lloyd's 89-yard TD on September 25, 2005 vs. Dallas.",
                            "characterCount": 193,
                            "teams": [
                              {
                                "teamId": 359,
                                "players": [
                                  {
                                    "player": {
                                      "playerId": 733672,
                                      "firstName": "George",
                                      "lastName": "Kittle",
                                      "uniform": "85"
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "sequenceNumber": 10,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "2nd Quarter",
                              "period": 2,
                              "time": 0
                            },
                            "text": "Denver's first four drives have all ended in punts, the team's longest such streak to start a game since December 4, 2016 at Jacksonville.",
                            "characterCount": 138,
                            "teams": [
                              {
                                "teamId": 332
                              }
                            ]
                          },
                          {
                            "sequenceNumber": 11,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "2nd Quarter",
                              "period": 2,
                              "time": 0
                            },
                            "text": "Bradley Chubb and Von Miller have each recorded a sack today, the sixth time this season both have had at least one in the same game. Those six games are the most by any duo this season and tie the most by any Denver duo since sacks became official in 1982 - Simon Fletcher and Karl Mecklenburg had six in 1991.",
                            "characterCount": 311,
                            "teams": [
                              {
                                "teamId": 332,
                                "players": [
                                  {
                                    "player": {
                                      "playerId": 409742,
                                      "firstName": "Von",
                                      "lastName": "Miller",
                                      "uniform": "58"
                                    }
                                  },
                                  {
                                    "player": {
                                      "playerId": 832398,
                                      "firstName": "Bradley",
                                      "lastName": "Chubb",
                                      "uniform": "55"
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "sequenceNumber": 12,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "2nd Quarter",
                              "period": 2,
                              "time": 0
                            },
                            "text": "Denver has punted on all five of its first-half drives. It's the first time the Broncos' first five drives of a game have all ended in punts since October 31, 2010, also on the road against the 49ers.",
                            "characterCount": 200,
                            "teams": [
                              {
                                "teamId": 332
                              }
                            ]
                          },
                          {
                            "sequenceNumber": 13,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "2nd Quarter",
                              "period": 2,
                              "time": 0
                            },
                            "text": "Dante Pettis has caught a touchdown in three straight games, the first 49ers rookie to do so since Dave Parks had a four-game streak in 1964.",
                            "characterCount": 141,
                            "teams": [
                              {
                                "teamId": 359,
                                "players": [
                                  {
                                    "player": {
                                      "playerId": 837820,
                                      "firstName": "Dante",
                                      "lastName": "Pettis",
                                      "uniform": "18"
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "sequenceNumber": 14,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "Halftime",
                              "period": 2,
                              "time": 0
                            },
                            "text": "The 49ers put up 311 total yards in the first half, their most in a first half since November 6, 2016 vs. New Orleans (319). Meanwhile, the Broncos set a season low with 65 total yards in the first half.",
                            "characterCount": 203,
                            "teams": [
                              {
                                "teamId": 359
                              }
                            ]
                          },
                          {
                            "sequenceNumber": 15,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "Halftime",
                              "period": 2,
                              "time": 0
                            },
                            "text": "This is the largest halftime lead for the 49ers since December 20, 2014 vs. the Chargers (28-7). San Francisco ended up losing that game, 38-35 in OT, snapping a 65-game win streak when leading by 20+ points at halftime.",
                            "characterCount": 220,
                            "teams": [
                              {
                                "teamId": 359
                              }
                            ]
                          },
                          {
                            "sequenceNumber": 16,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "Halftime",
                              "period": 2,
                              "time": 0
                            },
                            "text": "Nick Mullens has 271 passing yards and zero interceptions at halftime. He's the first 49ers player with 270+ yards and zero interceptions in the first half since Steve Young on September 21, 1997 vs. Atlanta (287).",
                            "characterCount": 214,
                            "teams": [
                              {
                                "teamId": 359,
                                "players": [
                                  {
                                    "player": {
                                      "playerId": 748309,
                                      "firstName": "Nick",
                                      "lastName": "Mullens",
                                      "uniform": "4"
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "sequenceNumber": 17,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "Halftime",
                              "period": 2,
                              "time": 0
                            },
                            "text": "George Kittle had 210 receiving yards in the first half, the most by any NFL player in the first half in the last 25 years. Kittle is just four yards shy of the NFL record for receiving yards in a game by a tight end, currently held by Shannon Sharpe (214 yards on October 20, 2002 at Kansas City).",
                            "characterCount": 298,
                            "teams": [
                              {
                                "teamId": 359,
                                "players": [
                                  {
                                    "player": {
                                      "playerId": 733672,
                                      "firstName": "George",
                                      "lastName": "Kittle",
                                      "uniform": "85"
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "sequenceNumber": 19,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "3rd Quarter",
                              "period": 3,
                              "time": 0
                            },
                            "text": "With his second sack of the game, Bradley Chubb now has 12 sacks on the season, surpassing teammate Von Miller's franchise rookie record of 11.5 sacks, set in 2011. Chubb is just 2.5 sacks shy of the NFL rookie record of 14.5, set by Tennessee's Jevon Kearse in 1999.",
                            "characterCount": 267,
                            "teams": [
                              {
                                "teamId": 332,
                                "players": [
                                  {
                                    "player": {
                                      "playerId": 409742,
                                      "firstName": "Von",
                                      "lastName": "Miller",
                                      "uniform": "58"
                                    }
                                  },
                                  {
                                    "player": {
                                      "playerId": 832398,
                                      "firstName": "Bradley",
                                      "lastName": "Chubb",
                                      "uniform": "55"
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "sequenceNumber": 20,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "3rd Quarter",
                              "period": 3,
                              "time": 0
                            },
                            "text": "Phillip Lindsay has now scored a rushing touchdown in four straight games, tying the longest streak by a rookie in franchise history (Jon Keyworth in 1974 and Peyton Hillis in 2008).",
                            "characterCount": 182,
                            "teams": [
                              {
                                "teamId": 332,
                                "players": [
                                  {
                                    "player": {
                                      "playerId": 747861,
                                      "firstName": "Phillip",
                                      "lastName": "Lindsay",
                                      "uniform": "30"
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "sequenceNumber": 21,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "3rd Quarter",
                              "period": 3,
                              "time": 0
                            },
                            "text": "The 49ers lead 20-7 through three quarters. San Francisco is just 2-2 when leading entering the fourth quarter, the second worst record in the NFL (Oakland, 1-3).",
                            "characterCount": 162,
                            "teams": [
                              {
                                "teamId": 359
                              }
                            ]
                          },
                          {
                            "sequenceNumber": 22,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "4th Quarter",
                              "period": 4,
                              "time": 0
                            },
                            "text": "The Broncos failed on fourth down for the second time today. Denver has gone for it on fourth down four times today, its most in a game since October 9, 2016 vs. Atlanta (4-for-4).",
                            "characterCount": 180,
                            "teams": [
                              {
                                "teamId": 332
                              }
                            ]
                          },
                          {
                            "sequenceNumber": 23,
                            "clientCommentaryId": 0,
                            "gameState": {
                              "state": "4th Quarter",
                              "period": 4,
                              "time": 0
                            },
                            "text": "Denver used three more fourth-down conversions to drive 14 plays for a touchdown. The Broncos are the first team to go for it on fourth down 7+ times in a game since the Panthers on December 30, 2001 vs. Arizona (4-for-7).",
                            "characterCount": 222,
                            "teams": [
                              {
                                "teamId": 332
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          }
        ]
      })
    } catch (err) {
      res.status(500).send(err)
    }
  },

  statsMock: async (req, res) => {
    try {
        // console.log(statsmockres.apiResults[0].league.season.eventType[0].events[0].pbp)
        // console.log(statsmockres.apiResults[0].league.season.eventType[0].events[0].driveChart)
      res.status(200).send(statsmockres)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  test: async (req, res) => {
    try {
      let eventId = req.params.eventId;
      let timeFromEpoch = moment.utc().unix();
      let apiKey = process.env.SP_API_KEY;
      let secret = process.env.SP_API_SECRET;
    
      eventId = '2188785';
    
      // generate signature
      let sig = crypto.createHash('sha256').update(apiKey + secret + timeFromEpoch).digest('hex');
    
      request('http://api.stats.com/v1/stats/basketball/cbk/box/' + eventId+ '?accept=json&api_key=' + apiKey + '&sig=' + sig + '&box=true',
          function (err, response, body) {
            // parse the body as JSON
            var parsedBody = JSON.parse(body);
            res.json(parsedBody);
          });
    } catch (err) {
      res.status(500).send(err)
    }
  },

  events: async (req, res) => {
    try {
      let timeFromEpoch = moment.utc().unix();
      let apiKey = process.env.SP_API_KEY;
      let secret = process.env.SP_API_SECRET;
      let sig = crypto.createHash('sha256').update(apiKey + secret + timeFromEpoch).digest('hex');
      //api.stats.com/v1/stats/football/cfb/events/2162374?box=true&insights=true&accept=json
      request('http://api.stats.com/v1/stats/basketball/cbk/events/?accept=json&api_key=' + apiKey + '&sig=' + sig,
				function (err, response, body) {
					// parse the body as JSON
					console.log(err);
					var parsedBody = JSON.parse(body);
					res.json(parsedBody);
				});
    } catch (err) {
      res.status(500).send(err)
    }
  },

  insights: async (req, res) => {
    try {
      let timeFromEpoch = moment.utc().unix();
      let apiKey = process.env.SP_API_KEY;
      let secret = process.env.SP_API_SECRET;
      let sig = crypto.createHash('sha256').update(apiKey + secret + timeFromEpoch).digest('hex');
      //api.stats.com/v1/stats/football/cfb/events/2162374?box=true&insights=true&accept=json
      request('http://api.stats.com/v1/stats/football/cfb/events/2162374?insights=true&accept=json&api_key=' + apiKey + '&sig=' + sig,
				function (err, response, body) {
					// parse the body as JSON
					console.log(err);
					var parsedBody = JSON.parse(body);
					res.json(parsedBody);
				});
    } catch (err) {
      res.status(500).send(err)
    }
  },

	cfp: async (req, res) => {
    try {
      let eventId = req.params.eventId;
      let timeFromEpoch = moment.utc().unix();
      let apiKey = process.env.SP_API_KEY;
      let secret = process.env.SP_API_SECRET;
    
      eventId = '2188785';
    
      // generate signature
      let sig = crypto.createHash('sha256').update(apiKey + secret + timeFromEpoch).digest('hex');
    
      request('http://api.stats.com/v1/stats/football/cfb/events/2162374?box=true&Pbp=true&driveCharts=true&accept=json&api_key=' + apiKey + '&sig=' + sig,
          function (err, response, body) {
						// parse the body as JSON
						console.log(err)
            var parsedBody = JSON.parse(body);
            res.json(parsedBody);
          });
    } catch (err) {
      res.status(500).send(err)
    }
	},
	
	getRosterBy: async (req, res) => {
    try {
      let timeFromEpoch = moment.utc().unix();
      let apiKey = process.env.SP_API_KEY;
			let secret = process.env.SP_API_SECRET;
      let sig = crypto.createHash('sha256').update(apiKey + secret + timeFromEpoch).digest('hex');
      request('http://api.stats.com/v1/stats/football/cfb/participants/teams/' +req.params.id + '?accept=json&api_key=' + apiKey + '&sig=' + sig,
				function (err, response, body) {	
					let parsedBody = JSON.parse(body);			
					res.status(200).send(parsedBody.apiResults[0].league.players);
				}
			)
    } catch (err) {
      res.status(500).send(err)
    }
  }

}

module.exports.Controller = StatsController;
module.exports.controller = (app) => {
	app.get('/v1/stats/mock', StatsController.statsMock)
	app.get('/v1/stats/cfp', StatsController.cfp)
  app.get('/v1/stats/:eventId', StatsController.test)
  
  app.get('/v1/insights/mock', StatsController.insightsMock)
  app.get('/v1/insights', StatsController.insights)

	app.get('/v1/roster/:id', StatsController.getRosterBy)

  app.get('/v1/events', StatsController.events)
  
}