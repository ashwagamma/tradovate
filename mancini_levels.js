
const predef = require("./tools/predef");
const EMA = require("./tools/EMA");
const p = require("./tools/plotting");
const meta = require("./tools/meta");
const { ParamType } = meta;
const { px, du, op, min } = require("./tools/graphics");

function number(defValue, step, min) {
    return {
        type: ParamType.NUMBER,
        def: defValue,
        restrictions: {
            step: step || 1,
            min: min > 0 ? min : 0
        }
    };
}

const strongRes = predef.styles.plot({color: 'red', lineWidth: 2});

const res = predef.styles.plot({color: 'red', lineWidth: 1});

const strongSup = predef.styles.plot({color: 'green', lineWidth: 3});

const sup = predef.styles.plot({color: 'green', lineWidth: 1});

class manciniLevels {
    map(d, i, history) {
        return {
			d6043: this.props.d6043,
			d6037: this.props.d6037,
			d6028: this.props.d6028,
			d6008: this.props.d6008,
			d6004: this.props.d6004,
			d5996: this.props.d5996,
			d5989: this.props.d5989,
			d5977: this.props.d5977,
			d5965: this.props.d5965,
			d5957: this.props.d5957,
			d5950: this.props.d5950,
			d5938: this.props.d5938,
			d5926: this.props.d5926,
			d5918: this.props.d5918,
			d5893: this.props.d5893,
			d5866: this.props.d5866,
			d5858: this.props.d5858,
			d5842: this.props.d5842,
			d5836: this.props.d5836,
			d5822: this.props.d5822,
			d5813: this.props.d5813,
			d5795: this.props.d5795,
			d5787: this.props.d5787,
			d5781: this.props.d5781,
			d5775: this.props.d5775,
			d5761: this.props.d5761,
			d5757: this.props.d5757,
			d6054: this.props.d6054,
			d6082: this.props.d6082,
			d6086: this.props.d6086,
			d6093: this.props.d6093,
			d6104: this.props.d6104,
			d6109: this.props.d6109,
			d6115: this.props.d6115,
			d6123: this.props.d6123,
			d6138: this.props.d6138,
			d6143: this.props.d6143,
			d6149: this.props.d6149,
			d6155: this.props.d6155,
			d6160: this.props.d6160,
			d6167: this.props.d6167,
			d6175: this.props.d6175,
			d6184: this.props.d6184,
			d6190: this.props.d6190,
			d6197: this.props.d6197,
			d6208: this.props.d6208,
			d6226: this.props.d6226,
			d6235: this.props.d6235,
			d6252: this.props.d6252,
			d6260: this.props.d6260,
			d6272: this.props.d6272,
			d6281: this.props.d6281,
			d6289: this.props.d6289,
			d6305: this.props.d6305,
			d6314: this.props.d6314,
			d6335: this.props.d6335,
			d6333: this.props.d6333,
			d6347: this.props.d6347,
			d6360: this.props.d6360,
			d6368: this.props.d6368,
			d6379: this.props.d6379,
			d6386: this.props.d6386,
			d6394: this.props.d6394,
			d6400: this.props.d6400,
			d6411: this.props.d6411,
			d6016: this.props.d6016,
			d6020: this.props.d6020,
			d5907: this.props.d5907,
			d5910: this.props.d5910,
			d5875: this.props.d5875,
			d5880: this.props.d5880,
			d5849: this.props.d5849,
			d5851: this.props.d5851,
			d5800: this.props.d5800,
			d5805: this.props.d5805,
			d5746: this.props.d5746,
			d5751: this.props.d5751,
			d6066: this.props.d6066,
			d6070: this.props.d6070,
			d6129: this.props.d6129,
			d6131: this.props.d6131,
			d6214: this.props.d6214,
			d6218: this.props.d6218,
			graphics: d.isLast() && {
				items: [
					{
						tag: 'Text',
						key: 'd6054',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6054), "+", px(0))
						},
						text: "(lomomoreclaim_w43def) 6054",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6082',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6082), "+", px(0))
						},
						text: "6082",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6086',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6086), "+", px(0))
						},
						text: "6086",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6093',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6093), "+", px(0))
						},
						text: "(major) 6093",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6104',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6104), "+", px(0))
						},
						text: "6104",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6109',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6109), "+", px(0))
						},
						text: "(major; disho) 6109",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6115',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6115), "+", px(0))
						},
						text: "(major) 6115",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6123',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6123), "+", px(0))
						},
						text: "6123",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6138',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6138), "+", px(0))
						},
						text: "6138",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6143',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6143), "+", px(0))
						},
						text: "6143",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6149',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6149), "+", px(0))
						},
						text: "(major) 6149",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6155',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6155), "+", px(0))
						},
						text: "6155",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6160',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6160), "+", px(0))
						},
						text: "(major) 6160",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6167',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6167), "+", px(0))
						},
						text: "6167",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6175',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6175), "+", px(0))
						},
						text: "(major) 6175",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6184',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6184), "+", px(0))
						},
						text: "(major) 6184",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6190',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6190), "+", px(0))
						},
						text: "6190",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6197',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6197), "+", px(0))
						},
						text: "6197",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6208',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6208), "+", px(0))
						},
						text: "6208",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6226',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6226), "+", px(0))
						},
						text: "6226",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6235',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6235), "+", px(0))
						},
						text: "(major) 6235",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6252',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6252), "+", px(0))
						},
						text: "6252",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6260',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6260), "+", px(0))
						},
						text: "(major) 6260",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6272',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6272), "+", px(0))
						},
						text: "6272",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6281',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6281), "+", px(0))
						},
						text: "(major) 6281",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6289',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6289), "+", px(0))
						},
						text: "6289",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6305',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6305), "+", px(0))
						},
						text: "(major) 6305",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6314',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6314), "+", px(0))
						},
						text: "6314",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6335',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6335), "+", px(0))
						},
						text: "6335",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6333',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6333), "+", px(0))
						},
						text: "(major) 6333",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6347',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6347), "+", px(0))
						},
						text: "6347",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6360',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6360), "+", px(0))
						},
						text: "6360",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6368',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6368), "+", px(0))
						},
						text: "6368",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6379',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6379), "+", px(0))
						},
						text: "6379",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6386',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6386), "+", px(0))
						},
						text: "(major) 6386",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6394',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6394), "+", px(0))
						},
						text: "6394",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6400',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6400), "+", px(0))
						},
						text: "(major) 6400",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6411',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6411), "+", px(0))
						},
						text: "(major) 6411",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6043',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6043), "+", px(0))
						},
						text: "(major; lof&r_28or37tapbonus; shobkdn) 6043",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6037',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6037), "+", px(0))
						},
						text: "6037",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6028',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6028), "+", px(0))
						},
						text: "6028",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6008',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6008), "+", px(0))
						},
						text: "6008",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6004',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6004), "+", px(0))
						},
						text: "(major; lookforlongs) 6004",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5996',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5996), "+", px(0))
						},
						text: "5996",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5989',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5989), "+", px(0))
						},
						text: "(major; lookforlongs) 5989",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5977',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5977), "+", px(0))
						},
						text: "5977",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5965',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5965), "+", px(0))
						},
						text: "(major) 5965",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5957',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5957), "+", px(0))
						},
						text: "5957",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5950',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5950), "+", px(0))
						},
						text: "(major; lookforlongs) 5950",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5938',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5938), "+", px(0))
						},
						text: "5938",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5926',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5926), "+", px(0))
						},
						text: "(major; lofbdpwlodof37) 5926",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5918',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5918), "+", px(0))
						},
						text: "5918",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5893',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5893), "+", px(0))
						},
						text: "5893",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5866',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5866), "+", px(0))
						},
						text: "5866",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5858',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5858), "+", px(0))
						},
						text: "5858",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5842',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5842), "+", px(0))
						},
						text: "5842",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5836',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5836), "+", px(0))
						},
						text: "5836",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5822',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5822), "+", px(0))
						},
						text: "(major) 5822",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5813',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5813), "+", px(0))
						},
						text: "5813",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5795',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5795), "+", px(0))
						},
						text: "(major) 5795",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5787',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5787), "+", px(0))
						},
						text: "5787",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5781',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5781), "+", px(0))
						},
						text: "5781",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5775',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5775), "+", px(0))
						},
						text: "(major) 5775",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5761',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5761), "+", px(0))
						},
						text: "5761",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5757',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5757), "+", px(0))
						},
						text: "5757",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6066',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6066), "+", px(0))
						},
						text: "(major; possonelastdisho; lotrickyreclaim) 6066-70",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6129',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6129), "+", px(0))
						},
						text: "(major; disho) 6129-31",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6214',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6214), "+", px(0))
						},
						text: "(major) 6214-18",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6016',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d6016), "+", px(0))
						},
						text: "(major; lo16pop20+; lof&r; shobkdn) 6016-20",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5907',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5907), "+", px(0))
						},
						text: "(major) 5907-10",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5875',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5875), "+", px(0))
						},
						text: "(major) 5875-80",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5849',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5849), "+", px(0))
						},
						text: "(major) 5849-51",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5800',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5800), "+", px(0))
						},
						text: "(major) 5805-5800",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5746',
						point: {
							x: du(d.index() + 7),
							y: op(du(this.props.d5746), "+", px(0))
						},
						text: "(major) 5751-5746",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
				]
			},

        };
    }
}

function rangePlotter(canvas, calculatorInstance, history) {
    for(let i=history.data.length-50; i<history.data.length; ++i) {
        const item = history.get(i);
        const x = p.x.get(item);
		if (item.d6016 !== undefined && item.d6020 !== undefined) {
			canvas.drawLine(
				p.offset(x, item.d6016),
				p.offset(x, item.d6020),
				{color: "green", relativeWidth: 1, opacity: 0.3});
		}
		if (item.d5907 !== undefined && item.d5910 !== undefined) {
			canvas.drawLine(
				p.offset(x, item.d5907),
				p.offset(x, item.d5910),
				{color: "green", relativeWidth: 1, opacity: 0.3});
		}
		if (item.d5875 !== undefined && item.d5880 !== undefined) {
			canvas.drawLine(
				p.offset(x, item.d5875),
				p.offset(x, item.d5880),
				{color: "green", relativeWidth: 1, opacity: 0.3});
		}
		if (item.d5849 !== undefined && item.d5851 !== undefined) {
			canvas.drawLine(
				p.offset(x, item.d5849),
				p.offset(x, item.d5851),
				{color: "green", relativeWidth: 1, opacity: 0.3});
		}
		if (item.d5800 !== undefined && item.d5805 !== undefined) {
			canvas.drawLine(
				p.offset(x, item.d5800),
				p.offset(x, item.d5805),
				{color: "green", relativeWidth: 1, opacity: 0.3});
		}
		if (item.d5746 !== undefined && item.d5751 !== undefined) {
			canvas.drawLine(
				p.offset(x, item.d5746),
				p.offset(x, item.d5751),
				{color: "green", relativeWidth: 1, opacity: 0.3});
		}
		if (item.d6066 !== undefined && item.d6070 !== undefined) {
			canvas.drawLine(
				p.offset(x, item.d6066),
				p.offset(x, item.d6070),
				{color: "red", relativeWidth: 1, opacity: 0.3});
		}
		if (item.d6129 !== undefined && item.d6131 !== undefined) {
			canvas.drawLine(
				p.offset(x, item.d6129),
				p.offset(x, item.d6131),
				{color: "red", relativeWidth: 1, opacity: 0.3});
		}
		if (item.d6214 !== undefined && item.d6218 !== undefined) {
			canvas.drawLine(
				p.offset(x, item.d6214),
				p.offset(x, item.d6218),
				{color: "red", relativeWidth: 1, opacity: 0.3});
		}

    }
}

module.exports = {
    name: "Mancini Levels",
    description: "Mancini Levels",
    calculator: manciniLevels,
    inputType: meta.InputType.BARS,
    tags: ['MyCustom'],
    params: {
			d6043: number(6043, 1, 0),
			d6037: number(6037, 1, 0),
			d6028: number(6028, 1, 0),
			d6008: number(6008, 1, 0),
			d6004: number(6004, 1, 0),
			d5996: number(5996, 1, 0),
			d5989: number(5989, 1, 0),
			d5977: number(5977, 1, 0),
			d5965: number(5965, 1, 0),
			d5957: number(5957, 1, 0),
			d5950: number(5950, 1, 0),
			d5938: number(5938, 1, 0),
			d5926: number(5926, 1, 0),
			d5918: number(5918, 1, 0),
			d5893: number(5893, 1, 0),
			d5866: number(5866, 1, 0),
			d5858: number(5858, 1, 0),
			d5842: number(5842, 1, 0),
			d5836: number(5836, 1, 0),
			d5822: number(5822, 1, 0),
			d5813: number(5813, 1, 0),
			d5795: number(5795, 1, 0),
			d5787: number(5787, 1, 0),
			d5781: number(5781, 1, 0),
			d5775: number(5775, 1, 0),
			d5761: number(5761, 1, 0),
			d5757: number(5757, 1, 0),
			d6054: number(6054, 1, 0),
			d6082: number(6082, 1, 0),
			d6086: number(6086, 1, 0),
			d6093: number(6093, 1, 0),
			d6104: number(6104, 1, 0),
			d6109: number(6109, 1, 0),
			d6115: number(6115, 1, 0),
			d6123: number(6123, 1, 0),
			d6138: number(6138, 1, 0),
			d6143: number(6143, 1, 0),
			d6149: number(6149, 1, 0),
			d6155: number(6155, 1, 0),
			d6160: number(6160, 1, 0),
			d6167: number(6167, 1, 0),
			d6175: number(6175, 1, 0),
			d6184: number(6184, 1, 0),
			d6190: number(6190, 1, 0),
			d6197: number(6197, 1, 0),
			d6208: number(6208, 1, 0),
			d6226: number(6226, 1, 0),
			d6235: number(6235, 1, 0),
			d6252: number(6252, 1, 0),
			d6260: number(6260, 1, 0),
			d6272: number(6272, 1, 0),
			d6281: number(6281, 1, 0),
			d6289: number(6289, 1, 0),
			d6305: number(6305, 1, 0),
			d6314: number(6314, 1, 0),
			d6335: number(6335, 1, 0),
			d6333: number(6333, 1, 0),
			d6347: number(6347, 1, 0),
			d6360: number(6360, 1, 0),
			d6368: number(6368, 1, 0),
			d6379: number(6379, 1, 0),
			d6386: number(6386, 1, 0),
			d6394: number(6394, 1, 0),
			d6400: number(6400, 1, 0),
			d6411: number(6411, 1, 0),
			d6016: number(6016, 1, 0),
			d6020: number(6020, 1, 0),
			d5907: number(5907, 1, 0),
			d5910: number(5910, 1, 0),
			d5875: number(5875, 1, 0),
			d5880: number(5880, 1, 0),
			d5849: number(5849, 1, 0),
			d5851: number(5851, 1, 0),
			d5800: number(5800, 1, 0),
			d5805: number(5805, 1, 0),
			d5746: number(5746, 1, 0),
			d5751: number(5751, 1, 0),
			d6066: number(6066, 1, 0),
			d6070: number(6070, 1, 0),
			d6129: number(6129, 1, 0),
			d6131: number(6131, 1, 0),
			d6214: number(6214, 1, 0),
			d6218: number(6218, 1, 0),

    },
    plotter: [
			predef.plotters.singleline("d6043"),
			predef.plotters.singleline("d6037"),
			predef.plotters.singleline("d6028"),
			predef.plotters.singleline("d6008"),
			predef.plotters.singleline("d6004"),
			predef.plotters.singleline("d5996"),
			predef.plotters.singleline("d5989"),
			predef.plotters.singleline("d5977"),
			predef.plotters.singleline("d5965"),
			predef.plotters.singleline("d5957"),
			predef.plotters.singleline("d5950"),
			predef.plotters.singleline("d5938"),
			predef.plotters.singleline("d5926"),
			predef.plotters.singleline("d5918"),
			predef.plotters.singleline("d5893"),
			predef.plotters.singleline("d5866"),
			predef.plotters.singleline("d5858"),
			predef.plotters.singleline("d5842"),
			predef.plotters.singleline("d5836"),
			predef.plotters.singleline("d5822"),
			predef.plotters.singleline("d5813"),
			predef.plotters.singleline("d5795"),
			predef.plotters.singleline("d5787"),
			predef.plotters.singleline("d5781"),
			predef.plotters.singleline("d5775"),
			predef.plotters.singleline("d5761"),
			predef.plotters.singleline("d5757"),
			predef.plotters.singleline("d6054"),
			predef.plotters.singleline("d6082"),
			predef.plotters.singleline("d6086"),
			predef.plotters.singleline("d6093"),
			predef.plotters.singleline("d6104"),
			predef.plotters.singleline("d6109"),
			predef.plotters.singleline("d6115"),
			predef.plotters.singleline("d6123"),
			predef.plotters.singleline("d6138"),
			predef.plotters.singleline("d6143"),
			predef.plotters.singleline("d6149"),
			predef.plotters.singleline("d6155"),
			predef.plotters.singleline("d6160"),
			predef.plotters.singleline("d6167"),
			predef.plotters.singleline("d6175"),
			predef.plotters.singleline("d6184"),
			predef.plotters.singleline("d6190"),
			predef.plotters.singleline("d6197"),
			predef.plotters.singleline("d6208"),
			predef.plotters.singleline("d6226"),
			predef.plotters.singleline("d6235"),
			predef.plotters.singleline("d6252"),
			predef.plotters.singleline("d6260"),
			predef.plotters.singleline("d6272"),
			predef.plotters.singleline("d6281"),
			predef.plotters.singleline("d6289"),
			predef.plotters.singleline("d6305"),
			predef.plotters.singleline("d6314"),
			predef.plotters.singleline("d6335"),
			predef.plotters.singleline("d6333"),
			predef.plotters.singleline("d6347"),
			predef.plotters.singleline("d6360"),
			predef.plotters.singleline("d6368"),
			predef.plotters.singleline("d6379"),
			predef.plotters.singleline("d6386"),
			predef.plotters.singleline("d6394"),
			predef.plotters.singleline("d6400"),
			predef.plotters.singleline("d6411"),
			predef.plotters.singleline("d6016"),
			predef.plotters.singleline("d6020"),
			predef.plotters.singleline("d5907"),
			predef.plotters.singleline("d5910"),
			predef.plotters.singleline("d5875"),
			predef.plotters.singleline("d5880"),
			predef.plotters.singleline("d5849"),
			predef.plotters.singleline("d5851"),
			predef.plotters.singleline("d5800"),
			predef.plotters.singleline("d5805"),
			predef.plotters.singleline("d5746"),
			predef.plotters.singleline("d5751"),
			predef.plotters.singleline("d6066"),
			predef.plotters.singleline("d6070"),
			predef.plotters.singleline("d6129"),
			predef.plotters.singleline("d6131"),
			predef.plotters.singleline("d6214"),
			predef.plotters.singleline("d6218"),

            predef.plotters.custom(rangePlotter)
    ],
    schemeStyles: {
        dark: {
			d6043: strongSup,
			d6037: sup,
			d6028: sup,
			d6008: sup,
			d6004: strongSup,
			d5996: sup,
			d5989: strongSup,
			d5977: sup,
			d5965: strongSup,
			d5957: sup,
			d5950: strongSup,
			d5938: sup,
			d5926: strongSup,
			d5918: sup,
			d5893: sup,
			d5866: sup,
			d5858: sup,
			d5842: sup,
			d5836: sup,
			d5822: strongSup,
			d5813: sup,
			d5795: strongSup,
			d5787: sup,
			d5781: sup,
			d5775: strongSup,
			d5761: sup,
			d5757: sup,
			d6054: res,
			d6082: res,
			d6086: res,
			d6093: strongRes,
			d6104: res,
			d6109: strongRes,
			d6115: strongRes,
			d6123: res,
			d6138: res,
			d6143: res,
			d6149: strongRes,
			d6155: res,
			d6160: strongRes,
			d6167: res,
			d6175: strongRes,
			d6184: strongRes,
			d6190: res,
			d6197: res,
			d6208: res,
			d6226: res,
			d6235: strongRes,
			d6252: res,
			d6260: strongRes,
			d6272: res,
			d6281: strongRes,
			d6289: res,
			d6305: strongRes,
			d6314: res,
			d6335: res,
			d6333: strongRes,
			d6347: res,
			d6360: res,
			d6368: res,
			d6379: res,
			d6386: strongRes,
			d6394: res,
			d6400: strongRes,
			d6411: strongRes,
			d6016: strongSup,
			d6020: strongSup,
			d5907: strongSup,
			d5910: strongSup,
			d5875: strongSup,
			d5880: strongSup,
			d5849: strongSup,
			d5851: strongSup,
			d5800: strongSup,
			d5805: strongSup,
			d5746: strongSup,
			d5751: strongSup,
			d6066: strongRes,
			d6070: strongRes,
			d6129: strongRes,
			d6131: strongRes,
			d6214: strongRes,
			d6218: strongRes,

        }
   }
};
