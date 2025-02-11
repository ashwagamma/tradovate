
const predef = require("./tools/predef");
const EMA = require("./tools/EMA");
const p = require("./tools/plotting");
const meta = require("./tools/meta");
const { ParamType } = meta;
const { px, du, op, min } = require("./tools/graphics");


class manciniLevels {
    map(d) {
        return {
			graphics: d.isLast() && {
				items: [
					{
						tag: 'LineSegments',
						key: 'lines_minor_res',
						lines: [
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6099),
							},
							b: {
								x: du(d.index()+5),
								y: du(6099)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6104),
							},
							b: {
								x: du(d.index()+5),
								y: du(6104)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6109),
							},
							b: {
								x: du(d.index()+5),
								y: du(6109)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6123),
							},
							b: {
								x: du(d.index()+5),
								y: du(6123)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6138),
							},
							b: {
								x: du(d.index()+5),
								y: du(6138)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6148),
							},
							b: {
								x: du(d.index()+5),
								y: du(6148)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6173),
							},
							b: {
								x: du(d.index()+5),
								y: du(6173)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6184),
							},
							b: {
								x: du(d.index()+5),
								y: du(6184)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6194),
							},
							b: {
								x: du(d.index()+5),
								y: du(6194)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6203),
							},
							b: {
								x: du(d.index()+5),
								y: du(6203)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6209),
							},
							b: {
								x: du(d.index()+5),
								y: du(6209)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6222),
							},
							b: {
								x: du(d.index()+5),
								y: du(6222)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6246),
							},
							b: {
								x: du(d.index()+5),
								y: du(6246)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6272),
							},
							b: {
								x: du(d.index()+5),
								y: du(6272)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6291),
							},
							b: {
								x: du(d.index()+5),
								y: du(6291)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6302),
							},
							b: {
								x: du(d.index()+5),
								y: du(6302)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
						],
						lineStyle: {
							lineWidth: 1,
							color: 'red'
						}
					},
					{
						tag: 'LineSegments',
						key: 'lines_major_res',
						lines: [
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6092),
							},
							b: {
								x: du(d.index()+5),
								y: du(6092)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6115),
							},
							b: {
								x: du(d.index()+5),
								y: du(6115)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6129),
							},
							b: {
								x: du(d.index()+5),
								y: du(6129)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6152),
							},
							b: {
								x: du(d.index()+5),
								y: du(6152)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6162),
							},
							b: {
								x: du(d.index()+5),
								y: du(6162)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6178),
							},
							b: {
								x: du(d.index()+5),
								y: du(6178)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6188),
							},
							b: {
								x: du(d.index()+5),
								y: du(6188)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6231),
							},
							b: {
								x: du(d.index()+5),
								y: du(6231)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6240),
							},
							b: {
								x: du(d.index()+5),
								y: du(6240)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6254),
							},
							b: {
								x: du(d.index()+5),
								y: du(6254)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6266),
							},
							b: {
								x: du(d.index()+5),
								y: du(6266)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6286),
							},
							b: {
								x: du(d.index()+5),
								y: du(6286)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6309),
							},
							b: {
								x: du(d.index()+5),
								y: du(6309)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6322),
							},
							b: {
								x: du(d.index()+5),
								y: du(6322)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
						],
						lineStyle: {
							lineWidth: 2,
							color: 'red'
						}
					},
					{
						tag: 'LineSegments',
						key: 'lines_minor_sup',
						lines: [
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6078),
							},
							b: {
								x: du(d.index()+5),
								y: du(6078)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6057),
							},
							b: {
								x: du(d.index()+5),
								y: du(6057)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6042),
							},
							b: {
								x: du(d.index()+5),
								y: du(6042)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6037),
							},
							b: {
								x: du(d.index()+5),
								y: du(6037)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6028),
							},
							b: {
								x: du(d.index()+5),
								y: du(6028)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6008),
							},
							b: {
								x: du(d.index()+5),
								y: du(6008)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6004),
							},
							b: {
								x: du(d.index()+5),
								y: du(6004)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5997),
							},
							b: {
								x: du(d.index()+5),
								y: du(5997)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5983),
							},
							b: {
								x: du(d.index()+5),
								y: du(5983)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5977),
							},
							b: {
								x: du(d.index()+5),
								y: du(5977)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5962),
							},
							b: {
								x: du(d.index()+5),
								y: du(5962)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5946),
							},
							b: {
								x: du(d.index()+5),
								y: du(5946)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5934),
							},
							b: {
								x: du(d.index()+5),
								y: du(5934)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5918),
							},
							b: {
								x: du(d.index()+5),
								y: du(5918)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5893),
							},
							b: {
								x: du(d.index()+5),
								y: du(5893)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5883),
							},
							b: {
								x: du(d.index()+5),
								y: du(5883)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5866),
							},
							b: {
								x: du(d.index()+5),
								y: du(5866)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5857),
							},
							b: {
								x: du(d.index()+5),
								y: du(5857)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5836),
							},
							b: {
								x: du(d.index()+5),
								y: du(5836)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5832),
							},
							b: {
								x: du(d.index()+5),
								y: du(5832)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5821),
							},
							b: {
								x: du(d.index()+5),
								y: du(5821)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5803),
							},
							b: {
								x: du(d.index()+5),
								y: du(5803)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5798),
							},
							b: {
								x: du(d.index()+5),
								y: du(5798)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5778),
							},
							b: {
								x: du(d.index()+5),
								y: du(5778)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
						],
						lineStyle: {
							lineWidth: 1,
							color: 'green'
						}
					},
					{
						tag: 'LineSegments',
						key: 'lines_major_sup',
						lines: [
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6086),
							},
							b: {
								x: du(d.index()+5),
								y: du(6086)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6052),
							},
							b: {
								x: du(d.index()+5),
								y: du(6052)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5926),
							},
							b: {
								x: du(d.index()+5),
								y: du(5926)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5907),
							},
							b: {
								x: du(d.index()+5),
								y: du(5907)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5875),
							},
							b: {
								x: du(d.index()+5),
								y: du(5875)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5811),
							},
							b: {
								x: du(d.index()+5),
								y: du(5811)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5785),
							},
							b: {
								x: du(d.index()+5),
								y: du(5785)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5771),
							},
							b: {
								x: du(d.index()+5),
								y: du(5771)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5763),
							},
							b: {
								x: du(d.index()+5),
								y: du(5763)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6066),
							},
							b: {
								x: du(d.index()+5),
								y: du(6066)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6070),
							},
							b: {
								x: du(d.index()+5),
								y: du(6070)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6015),
							},
							b: {
								x: du(d.index()+5),
								y: du(6015)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(6020),
							},
							b: {
								x: du(d.index()+5),
								y: du(6020)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5989),
							},
							b: {
								x: du(d.index()+5),
								y: du(5989)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5993),
							},
							b: {
								x: du(d.index()+5),
								y: du(5993)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5948),
							},
							b: {
								x: du(d.index()+5),
								y: du(5948)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5952),
							},
							b: {
								x: du(d.index()+5),
								y: du(5952)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5848),
							},
							b: {
								x: du(d.index()+5),
								y: du(5848)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
							{
							tag: 'Line',
							a: {
								x: du(1),
								y: du(5850),
							},
							b: {
								x: du(d.index()+5),
								y: du(5850)
							},
							infiniteStart: true,
							infiniteEnd: false
							},
						],
						lineStyle: {
							lineWidth: 2,
							color: 'green'
						}
					},
					{
						tag: 'Shapes',
						key: 'rects6066',
						primitives:
						[
							{
								tag: 'Rectangle',
								position: {
									x: du(d.index()+4),
									y: du(6066),
								},
								size: {
									height: du(4),
									width: du(1)
								},
								infiniteStart: true
							}
						],
						fillStyle: {
							color: 'green',
							opacity: 30
						}
					},
					{
						tag: 'Shapes',
						key: 'rects6015',
						primitives:
						[
							{
								tag: 'Rectangle',
								position: {
									x: du(d.index()+4),
									y: du(6015),
								},
								size: {
									height: du(5),
									width: du(1)
								},
								infiniteStart: true
							}
						],
						fillStyle: {
							color: 'green',
							opacity: 30
						}
					},
					{
						tag: 'Shapes',
						key: 'rects5989',
						primitives:
						[
							{
								tag: 'Rectangle',
								position: {
									x: du(d.index()+4),
									y: du(5989),
								},
								size: {
									height: du(4),
									width: du(1)
								},
								infiniteStart: true
							}
						],
						fillStyle: {
							color: 'green',
							opacity: 30
						}
					},
					{
						tag: 'Shapes',
						key: 'rects5948',
						primitives:
						[
							{
								tag: 'Rectangle',
								position: {
									x: du(d.index()+4),
									y: du(5948),
								},
								size: {
									height: du(4),
									width: du(1)
								},
								infiniteStart: true
							}
						],
						fillStyle: {
							color: 'green',
							opacity: 30
						}
					},
					{
						tag: 'Shapes',
						key: 'rects5848',
						primitives:
						[
							{
								tag: 'Rectangle',
								position: {
									x: du(d.index()+4),
									y: du(5848),
								},
								size: {
									height: du(2),
									width: du(1)
								},
								infiniteStart: true
							}
						],
						fillStyle: {
							color: 'green',
							opacity: 30
						}
					},
					{
						tag: 'Text',
						key: 'd6092',
						point: {
							x: du(d.index() + 10),
							y: op(du(6092), "+", px(0))
						},
						text: "(major; lobfunder_f&r86) 6092",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6099',
						point: {
							x: du(d.index() + 10),
							y: op(du(6099), "+", px(0))
						},
						text: "6099",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6104',
						point: {
							x: du(d.index() + 10),
							y: op(du(6104), "+", px(0))
						},
						text: "6104",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6109',
						point: {
							x: du(d.index() + 10),
							y: op(du(6109), "+", px(0))
						},
						text: "6109",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6115',
						point: {
							x: du(d.index() + 10),
							y: op(du(6115), "+", px(0))
						},
						text: "(major; possonelastdisho) 6115",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6123',
						point: {
							x: du(d.index() + 10),
							y: op(du(6123), "+", px(0))
						},
						text: "6123",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6129',
						point: {
							x: du(d.index() + 10),
							y: op(du(6129), "+", px(0))
						},
						text: "(major; disho) 6129",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6138',
						point: {
							x: du(d.index() + 10),
							y: op(du(6138), "+", px(0))
						},
						text: "6138",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6148',
						point: {
							x: du(d.index() + 10),
							y: op(du(6148), "+", px(0))
						},
						text: "6148",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6152',
						point: {
							x: du(d.index() + 10),
							y: op(du(6152), "+", px(0))
						},
						text: "(major) 6152",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6162',
						point: {
							x: du(d.index() + 10),
							y: op(du(6162), "+", px(0))
						},
						text: "(major) 6162",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6173',
						point: {
							x: du(d.index() + 10),
							y: op(du(6173), "+", px(0))
						},
						text: "6173",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6178',
						point: {
							x: du(d.index() + 10),
							y: op(du(6178), "+", px(0))
						},
						text: "(major) 6178",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6184',
						point: {
							x: du(d.index() + 10),
							y: op(du(6184), "+", px(0))
						},
						text: "6184",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6188',
						point: {
							x: du(d.index() + 10),
							y: op(du(6188), "+", px(0))
						},
						text: "(major) 6188",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6194',
						point: {
							x: du(d.index() + 10),
							y: op(du(6194), "+", px(0))
						},
						text: "6194",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6203',
						point: {
							x: du(d.index() + 10),
							y: op(du(6203), "+", px(0))
						},
						text: "6203",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6209',
						point: {
							x: du(d.index() + 10),
							y: op(du(6209), "+", px(0))
						},
						text: "6209",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6222',
						point: {
							x: du(d.index() + 10),
							y: op(du(6222), "+", px(0))
						},
						text: "6222",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6231',
						point: {
							x: du(d.index() + 10),
							y: op(du(6231), "+", px(0))
						},
						text: "(major) 6231",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6240',
						point: {
							x: du(d.index() + 10),
							y: op(du(6240), "+", px(0))
						},
						text: "(major) 6240",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6246',
						point: {
							x: du(d.index() + 10),
							y: op(du(6246), "+", px(0))
						},
						text: "6246",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6254',
						point: {
							x: du(d.index() + 10),
							y: op(du(6254), "+", px(0))
						},
						text: "(major) 6254",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6266',
						point: {
							x: du(d.index() + 10),
							y: op(du(6266), "+", px(0))
						},
						text: "(major) 6266",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6272',
						point: {
							x: du(d.index() + 10),
							y: op(du(6272), "+", px(0))
						},
						text: "6272",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6286',
						point: {
							x: du(d.index() + 10),
							y: op(du(6286), "+", px(0))
						},
						text: "(major) 6286",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6291',
						point: {
							x: du(d.index() + 10),
							y: op(du(6291), "+", px(0))
						},
						text: "6291",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6302',
						point: {
							x: du(d.index() + 10),
							y: op(du(6302), "+", px(0))
						},
						text: "6302",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6309',
						point: {
							x: du(d.index() + 10),
							y: op(du(6309), "+", px(0))
						},
						text: "(major) 6309",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6322',
						point: {
							x: du(d.index() + 10),
							y: op(du(6322), "+", px(0))
						},
						text: "(major) 6322",
						style: {fontSize: 11, fontWeight: "bold", fill: "#e06666"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6086',
						point: {
							x: du(d.index() + 10),
							y: op(du(6086), "+", px(0))
						},
						text: "(major) 6086",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6078',
						point: {
							x: du(d.index() + 10),
							y: op(du(6078), "+", px(0))
						},
						text: "6078",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6057',
						point: {
							x: du(d.index() + 10),
							y: op(du(6057), "+", px(0))
						},
						text: "6057",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6052',
						point: {
							x: du(d.index() + 10),
							y: op(du(6052), "+", px(0))
						},
						text: "(major; lookforlongs) 6052",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6042',
						point: {
							x: du(d.index() + 10),
							y: op(du(6042), "+", px(0))
						},
						text: "6042",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6037',
						point: {
							x: du(d.index() + 10),
							y: op(du(6037), "+", px(0))
						},
						text: "6037",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6028',
						point: {
							x: du(d.index() + 10),
							y: op(du(6028), "+", px(0))
						},
						text: "6028",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6008',
						point: {
							x: du(d.index() + 10),
							y: op(du(6008), "+", px(0))
						},
						text: "6008",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6004',
						point: {
							x: du(d.index() + 10),
							y: op(du(6004), "+", px(0))
						},
						text: "6004",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5997',
						point: {
							x: du(d.index() + 10),
							y: op(du(5997), "+", px(0))
						},
						text: "5997",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5983',
						point: {
							x: du(d.index() + 10),
							y: op(du(5983), "+", px(0))
						},
						text: "5983",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5977',
						point: {
							x: du(d.index() + 10),
							y: op(du(5977), "+", px(0))
						},
						text: "5977",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5962',
						point: {
							x: du(d.index() + 10),
							y: op(du(5962), "+", px(0))
						},
						text: "5962",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5946',
						point: {
							x: du(d.index() + 10),
							y: op(du(5946), "+", px(0))
						},
						text: "5946",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5934',
						point: {
							x: du(d.index() + 10),
							y: op(du(5934), "+", px(0))
						},
						text: "5934",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5926',
						point: {
							x: du(d.index() + 10),
							y: op(du(5926), "+", px(0))
						},
						text: "(major) 5926",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5918',
						point: {
							x: du(d.index() + 10),
							y: op(du(5918), "+", px(0))
						},
						text: "5918",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5907',
						point: {
							x: du(d.index() + 10),
							y: op(du(5907), "+", px(0))
						},
						text: "(major) 5907",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5893',
						point: {
							x: du(d.index() + 10),
							y: op(du(5893), "+", px(0))
						},
						text: "5893",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5883',
						point: {
							x: du(d.index() + 10),
							y: op(du(5883), "+", px(0))
						},
						text: "5883",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5875',
						point: {
							x: du(d.index() + 10),
							y: op(du(5875), "+", px(0))
						},
						text: "(major) 5875",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5866',
						point: {
							x: du(d.index() + 10),
							y: op(du(5866), "+", px(0))
						},
						text: "5866",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5857',
						point: {
							x: du(d.index() + 10),
							y: op(du(5857), "+", px(0))
						},
						text: "5857",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5836',
						point: {
							x: du(d.index() + 10),
							y: op(du(5836), "+", px(0))
						},
						text: "5836",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5832',
						point: {
							x: du(d.index() + 10),
							y: op(du(5832), "+", px(0))
						},
						text: "5832",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5821',
						point: {
							x: du(d.index() + 10),
							y: op(du(5821), "+", px(0))
						},
						text: "5821",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5811',
						point: {
							x: du(d.index() + 10),
							y: op(du(5811), "+", px(0))
						},
						text: "(major) 5811",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5803',
						point: {
							x: du(d.index() + 10),
							y: op(du(5803), "+", px(0))
						},
						text: "5803",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5798',
						point: {
							x: du(d.index() + 10),
							y: op(du(5798), "+", px(0))
						},
						text: "5798",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5785',
						point: {
							x: du(d.index() + 10),
							y: op(du(5785), "+", px(0))
						},
						text: "(major) 5785",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5778',
						point: {
							x: du(d.index() + 10),
							y: op(du(5778), "+", px(0))
						},
						text: "5778",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5771',
						point: {
							x: du(d.index() + 10),
							y: op(du(5771), "+", px(0))
						},
						text: "(major) 5771",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5763',
						point: {
							x: du(d.index() + 10),
							y: op(du(5763), "+", px(0))
						},
						text: "(major) 5763",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6066',
						point: {
							x: du(d.index() + 10),
							y: op(du(6066), "+", px(0))
						},
						text: "(major; lofbd; adv_shobkdn) 6066-70",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd6015',
						point: {
							x: du(d.index() + 10),
							y: op(du(6015), "+", px(0))
						},
						text: "(major; possonelastdilo; safer_lofbdylodof14; shobkdn) 6020-15",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5989',
						point: {
							x: du(d.index() + 10),
							y: op(du(5989), "+", px(0))
						},
						text: "(major; lookforlongs) 5989-93",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5948',
						point: {
							x: du(d.index() + 10),
							y: op(du(5948), "+", px(0))
						},
						text: "(major; lookforlongs) 5948-52",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
					{
						tag: 'Text',
						key: 'd5848',
						point: {
							x: du(d.index() + 10),
							y: op(du(5848), "+", px(0))
						},
						text: "(major) 5850-48",
						style: {fontSize: 11, fontWeight: "bold", fill: "#66e066"},
						textAlignment: 'rightMiddle',
					},
				]
			},

        };
    }
}

module.exports = {
    name: "Mancini Levels",
    description: "Mancini Levels",
    calculator: manciniLevels,
    inputType: meta.InputType.BARS,
    tags: ['MyCustom'],
};
