import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Info, Sparkles } from 'lucide-react';

interface PlaygroundProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Playground({ isOpen, onClose }: PlaygroundProps) {
  const [age, setAge] = useState(48);
  const [bp, setBp] = useState(85);
  const [sg, setSg] = useState(1.015);
  const [al, setAl] = useState(2);
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState<any>(null);

  const runPrediction = () => {
    setCalculating(true);
    setResult(null);

    setTimeout(() => {
      // Mock ML model logic based on real clinical risk factors
      const bpFactor = (bp - 70) * 0.4;
      const alFactor = al * 12.5;
      const sgFactor = (1.025 - sg) * 800; // lower specific gravity = higher risk
      const ageFactor = (age - 20) * 0.15;

      const riskScore = Math.max(0, Math.min(100, bpFactor + alFactor + sgFactor + ageFactor - 20));

      let stage = 'Stage 1 (Normal / Minimal Risk)';
      let description = 'Kidneys function normally. Maintain healthy lifestyle.';
      let colorClass = 'text-emerald-400 bg-emerald-400/10 border-emerald-500/20';

      if (riskScore > 75) {
        stage = 'Stage 4 / 5 (Severe / End-Stage)';
        description = 'Severe reduction in kidney function. Immediate clinical consultation required.';
        colorClass = 'text-rose-400 bg-rose-400/10 border-rose-500/20';
      } else if (riskScore > 50) {
        stage = 'Stage 3 (Moderate Damage)';
        description = 'Moderate loss of kidney function. Regular monitoring recommended.';
        colorClass = 'text-amber-400 bg-amber-400/10 border-amber-500/20';
      } else if (riskScore > 25) {
        stage = 'Stage 2 (Mild Damage)';
        description = 'Mild loss of kidney function. Observation and lifestyle adjustment recommended.';
        colorClass = 'text-yellow-400 bg-yellow-400/10 border-yellow-500/20';
      }

      setResult({
        score: Math.round(riskScore),
        stage,
        description,
        colorClass,
        shap: [
          { name: 'Albumin Level', val: alFactor, positive: true },
          { name: 'Specific Gravity', val: sgFactor, positive: true },
          { name: 'Blood Pressure', val: bpFactor, positive: bpFactor > 0 },
          { name: 'Patient Age', val: ageFactor, positive: true },
        ],
      });
      setCalculating(false);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-10 w-full max-w-2xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Sparkles className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Explainable AI (XAI) Playground</h3>
                  <p className="text-xs text-muted-foreground">CKD Stage Prediction Simulator</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Info panel */}
              <div className="rounded-xl border border-accent/20 bg-accent/5 p-4 flex gap-3 text-xs leading-relaxed text-muted-foreground">
                <Info className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <p>
                  This interactive playground demonstrates the integration of deep prediction modeling with SHAP (SHapley Additive exPlanations). Change the inputs below to see how the model calculates risk and how individual features contribute to the final decision.
                </p>
              </div>

              {/* Input Sliders */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Clinical Parameters</h4>
                  
                  {/* Albumin */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/80">Albumin (Urinary)</span>
                      <span className="font-medium text-accent">{al} g/dL</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="5"
                      step="1"
                      value={al}
                      onChange={(e) => setAl(Number(e.target.value))}
                      className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-[10px] text-muted-foreground/60">
                      <span>0 (Normal)</span>
                      <span>5 (Severe)</span>
                    </div>
                  </div>

                  {/* Specific Gravity */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/80">Specific Gravity</span>
                      <span className="font-medium text-accent">{sg.toFixed(3)}</span>
                    </div>
                    <input
                      type="range"
                      min="1.005"
                      max="1.025"
                      step="0.005"
                      value={sg}
                      onChange={(e) => setSg(Number(e.target.value))}
                      className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-[10px] text-muted-foreground/60">
                      <span>1.005 (Diluted)</span>
                      <span>1.025 (Concentrated)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 justify-between flex flex-col">
                  <div className="space-y-4">
                    <div className="h-4" />
                    {/* Blood Pressure */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground/80">Blood Pressure (Diastolic)</span>
                        <span className="font-medium text-accent">{bp} mmHg</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="140"
                        step="5"
                        value={bp}
                        onChange={(e) => setBp(Number(e.target.value))}
                        className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent"
                      />
                      <div className="flex justify-between text-[10px] text-muted-foreground/60">
                        <span>50 mmHg</span>
                        <span>140 mmHg</span>
                      </div>
                    </div>

                    {/* Age */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground/80">Patient Age</span>
                        <span className="font-medium text-accent">{age} Years</span>
                      </div>
                      <input
                        type="range"
                        min="18"
                        max="90"
                        step="1"
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                        className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent"
                      />
                      <div className="flex justify-between text-[10px] text-muted-foreground/60">
                        <span>18 Years</span>
                        <span>90 Years</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={runPrediction}
                    disabled={calculating}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition-all cursor-pointer mt-4"
                  >
                    {calculating ? (
                      <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>Run Diagnostic Inference <Play size={14} /></>
                    )}
                  </button>
                </div>
              </div>

              {/* Dynamic Results & SHAP Explanations */}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6 pt-6 border-t border-border"
                >
                  {/* Risk Score & Stage Card */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-1 rounded-xl border border-border p-5 flex flex-col justify-center items-center text-center">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground mb-1">CKD Risk Score</span>
                      <span className="text-4xl font-display italic font-semibold text-accent">{result.score}%</span>
                    </div>
                    <div className="sm:col-span-2 rounded-xl border border-border p-5 flex flex-col justify-center">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Predicted Severity Stage</span>
                      <div className={`px-3 py-1 rounded-md text-xs font-semibold border w-fit mb-2 ${result.colorClass}`}>
                        {result.stage}
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{result.description}</p>
                    </div>
                  </div>

                  {/* SHAP force plot / feature impact */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">SHAP Feature Contributions</h4>
                      <p className="text-[10px] text-muted-foreground mt-0.5">Indicates how much each feature pushes the risk index higher (+) or lower (-).</p>
                    </div>

                    <div className="space-y-3">
                      {result.shap.map((item: any) => {
                        const maxVal = 70; // normalize
                        const widthPct = Math.min(100, (Math.abs(item.val) / maxVal) * 100);
                        return (
                          <div key={item.name} className="grid grid-cols-12 items-center gap-3">
                            <span className="col-span-4 text-xs text-foreground/80 truncate">{item.name}</span>
                            <div className="col-span-6 h-3 bg-secondary rounded-full overflow-hidden relative">
                              <div
                                className={`h-full rounded-full transition-all duration-500 ${
                                  item.positive
                                    ? 'bg-rose-500/60'
                                    : 'bg-emerald-500/60'
                                }`}
                                style={{ width: `${widthPct}%` }}
                              />
                            </div>
                            <span className={`col-span-2 text-right text-xs font-medium ${
                              item.positive ? 'text-rose-400' : 'text-emerald-400'
                            }`}>
                              {item.positive ? '+' : ''}{item.val.toFixed(1)}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
