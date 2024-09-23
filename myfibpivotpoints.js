const predef = require("./tools/predef");
const meta = require("./tools/meta");
const MovingHigh = require("./tools/MovingHigh");
const MovingLow = require("./tools/MovingLow");

class pivotPoints {
    init() {
        this.highest = new MovingHigh();
        this.lowest = new MovingLow();
        this.started = false;
        this.pivotPoint = undefined;
		this.bcPivot = undefined;
		this.tcPivot = undefined;
		this.support1 = undefined;
		this.support2 = undefined;
		this.support3 = undefined;
		this.resistance1 = undefined;
		this.resistance2 = undefined;
		this.resistance3 = undefined;
		this.exSupport1 = undefined;
		this.exSupport2 = undefined;
		this.exSupport3 = undefined;
		this.exSupport4 = undefined;
		this.exSupport5 = undefined;
		this.exSupport6 = undefined;
		this.exResistance1 = undefined;
		this.exResistance2 = undefined;
		this.exResistance3 = undefined;
		this.exResistance4 = undefined;
		this.exResistance5 = undefined;
		this.exResistance6 = undefined;
		
    }

    map(d, i, history) {
        // Detect period transition
        const isNewPeriod = i > 0 && history.prior().tradeDate() !== d.tradeDate();

        // When to start plotting
        this.started = (i === 0) ? false : (this.started || isNewPeriod);

        if (this.started) {
            // Update Data only on initial start and after all ends
            if (isNewPeriod) {
                const high = this.highest.current();
                const low = this.lowest.current();
                const close = history.prior().close();
                this.pivotPoint = (high + low + close) / 3
				this.bcPivot = (high + low) / 2
				this.tcPivot = this.pivotPoint*2 - this.bcPivot
                this.support1 = this.pivotPoint - (0.382 * (high - low));
                this.support2 = this.pivotPoint - (0.618 * (high - low));
                this.support3 = this.pivotPoint - (1 * (high - low));
				this.exSupport1 = this.pivotPoint - (0.236 * (high - low));
				this.exSupport2 = this.pivotPoint - (0.500 * (high - low));
				this.exSupport3 = this.pivotPoint - (0.786 * (high - low));
				this.exSupport4 = this.pivotPoint - (0.886 * (high - low));
				this.exSupport5 = this.pivotPoint - (1.272 * (high - low));
				this.exSupport6 = this.pivotPoint - (1.618 * (high - low));
                this.resistance1 = this.pivotPoint + (0.382 * (high - low));
                this.resistance2 = this.pivotPoint + (0.618 * (high - low));
                this.resistance3 = this.pivotPoint + (1 * (high - low));
				this.exResistance1 = this.pivotPoint + (0.236 * (high - low));
				this.exResistance2 = this.pivotPoint + (0.500 * (high - low));
				this.exResistance3 = this.pivotPoint + (0.786 * (high - low));
				this.exResistance4 = this.pivotPoint + (0.886 * (high - low));
				this.exResistance5 = this.pivotPoint + (1.272 * (high - low));
				this.exResistance6 = this.pivotPoint + (1.618 * (high - low));
                this.highest.reset();
                this.lowest.reset();
            }

            this.highest.push(d.high());
            this.lowest.push(d.low());

            // Plot history
            if (this.started) {
                const result = {
                    startDate: (isNewPeriod ? d : history.prior()).timestamp(),
                    endDate: d.timestamp(),
                    pivotPoint: this.pivotPoint,
					bcPivot: this.bcPivot,
					tcPivot: this.tcPivot,
					support1: this.support1,
					support2: this.support2,
					support3: this.support3,
					exSupport1: this.exSupport1,
					exSupport2: this.exSupport2,
					exSupport3: this.exSupport3,
					exSupport4: this.exSupport4,
					exSupport5: this.exSupport5,
					exSupport6: this.exSupport6,
                    resistance1: this.resistance1,
                    resistance2: this.resistance2,
                    resistance3: this.resistance3,
					exResistance1: this.exResistance1,
					exResistance2: this.exResistance2,
					exResistance3: this.exResistance3,
					exResistance4: this.exResistance4,
					exResistance5: this.exResistance5,
					exResistance6: this.exResistance6,
                };
                return result;
            }
        }
        return {};
    }

    filter(d) {
        return predef.filters.isNumber(d.pivotPoint);
    }
}

module.exports = {
    name: "my Fibonacci Pivot Points v1",
    title: "Fibonacci Pivot Points v1",
    description: "Fibonacci Pivot Points v1",
    calculator: pivotPoints,
    inputType: meta.InputType.BARS,
    plotter: predef.plotters.pivotpoints([ "pivotPoint", "bcPivot", "tcPivot", "support1", "support2", "support3", "exSupport1", "exSupport2", "exSupport3", "exSupport4", "exSupport5", "exSupport6", "resistance1", "resistance2", "resistance3", "exResistance1", "exResistance2", "exResistance3", "exResistance4", "exResistance5", "exResistance6" ]),
    plots: {
        pivotPoint: { title: "PivotPoint" },
        bcPivot: { title: "bcPivot" },
        tcPivot: { title: "tcPivot" },
        support1: { title: "38.2% | Support 1" },
        support2: { title: "61.8% | Support 2" },
        support3: { title: "100% | Support 3" },
        resistance1: { title: "38.2% | Resistance 1" },
        resistance2: { title: "61.8% | Resistance 2" },
        resistance3: { title: "100% | Resistance 3" },
		exSupport1: { title: "23.6% | Additional Support", enabled: true },
		exSupport2: { title: "50% | Additional Support", enabled: true },
		exSupport3: { title: "78.6% | Additional Support", enabled: true },
		exSupport4: { title: "88.6% | Additional Support", enabled: true },
		exSupport5: { title: "127.2% | Additional Support", enabled: true },
		exSupport6: { title: "161.8% | Additional Support", enabled: true },
		exResistance1: { title: "23.6% | Additional Resistance", enabled: true },
		exResistance2: { title: "50% | Additional Resistance", enabled: true },
		exResistance3: { title: "78.6% | Additional Resistance", enabled: true },
		exResistance4: { title: "88.6% | Additional Resistance", enabled: true },
		exResistance5: { title: "127.2% | Additional Resistance", enabled: true },
		exResistance6: { title: "161.8% | Additional Resistance", enabled: true },
        },
    tags: ['MyCustom'],
    schemeStyles: {
        dark: {
            pivotPoint: predef.styles.plot({ color: "#4A90E2", lineWidth: 2 }),
            bcPivot: predef.styles.plot({ color: "#4A90E2", lineWidth: 1 }),
            tcPivot: predef.styles.plot({ color: "#4A90E2", lineWidth: 1 }),
			support1: predef.styles.plot({ color: "#2E8A57", lineStyle: 4, lineWidth: 2 }),
			support2: predef.styles.plot({ color: "#2E8A57", lineStyle: 4, lineWidth: 2 }),
			support3: predef.styles.plot({ color: "#2E8A57", lineStyle: 4, lineWidth: 2 }),
			exSupport1: predef.styles.plot({ color: "#2E8A57", lineStyle: 5, opacity: 100 }),
			exSupport2: predef.styles.plot({ color: "#2E8A57", lineStyle: 5, opacity: 100 }),
			exSupport3: predef.styles.plot({ color: "#2E8A57", lineStyle: 5, opacity: 100 }),
			exSupport4: predef.styles.plot({ color: "#2E8A57", lineStyle: 5, opacity: 100 }),
			exSupport5: predef.styles.plot({ color: "#2E8A57", lineStyle: 5, opacity: 100 }),
			exSupport6: predef.styles.plot({ color: "#2E8A57", lineStyle: 5, opacity: 100 }),
            resistance1: predef.styles.plot({ color: "#AE2D2A", lineStyle: 4, lineWidth: 2 }),
            resistance2: predef.styles.plot({ color: "#AE2D2A", lineStyle: 4, lineWidth: 2 }),
            resistance3: predef.styles.plot({ color: "#AE2D2A", lineStyle: 4, lineWidth: 2 }),
			exResistance1: predef.styles.plot({ color: "#AE2D2A", lineStyle: 5, opacity: 100 }),
			exResistance2: predef.styles.plot({ color: "#AE2D2A", lineStyle: 5, opacity: 100 }),
			exResistance3: predef.styles.plot({ color: "#AE2D2A", lineStyle: 5, opacity: 100 }),
			exResistance4: predef.styles.plot({ color: "#AE2D2A", lineStyle: 5, opacity: 100 }),
			exResistance5: predef.styles.plot({ color: "#AE2D2A", lineStyle: 5, opacity: 100 }),
			exResistance6: predef.styles.plot({ color: "#AE2D2A", lineStyle: 5, opacity: 100 }),
            
        }
    }
};

