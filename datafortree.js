data={
    "fa":{
        "spouse":["mo"],
        "child":["br","me"],
    },
    "mo":{
        "spouse":["fa"],
        "child":["br","me"],
    },
    "br":{
        "mother":["mo"],
        "father":["fa"],
        "brother":["me"],
    },
    "me":{
        "mother":["mo"],
        "father":["fa"],
        "brother":["br"],
        "spouse":["w"],
        "child":["s"]
    },
    "w":{
        "spouse":["me"],
        "child":["s"]
    },
    "s":{
        "mother":["w"],
        "father":["me"],
    }

}
