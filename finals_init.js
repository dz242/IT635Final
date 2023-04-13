db = db.getSiblingDB("bowlingLeagues");

db.createCollection("league");
db.createCollection("bowler");

db.createCollection("winner", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["winning_bowler_id", "winning_bowler_name", "league_id", "league_name"],
            properties: {
                winning_bowler_id: {
                    bsonType: "int",
                    description: "Must be an int and is required"
                },
                winning_bowler_name: {
                    bsonType: "string",
                    description: "Must be a string and is required"
                },
                league_id: {
                    bsonType: "int",
                    description: "Must be an int and is required"
                },
                league_name: {
                    bsonType: "string",
                    description: "Must be a string and is required"
                },
            }
        }
    }
})