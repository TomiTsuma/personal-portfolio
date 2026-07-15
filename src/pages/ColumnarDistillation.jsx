import React from 'react';
import './ColumnarDistillation.css';

const ColumnarDistillation = () => {
    return (
        <div className="page-container container animate-fade-in">
            <div className="research-header">
                <h1 className="page-title">Solving the Energy Crisis</h1>
                <p className="research-subtitle">
                    A Physics-Informed Neural Network for simulating binary columnar distillation,
                    modelling the separation of two chemical components toward 95% purity targets.
                </p>
                <div className="cd-post-meta">
                    <span>June 2026</span> &nbsp;·&nbsp; <span>Physics-Informed ML</span> &nbsp;·&nbsp; <span>Chemical Engineering</span>
                </div>
                <a
                    href="https://github.com/TomiTsuma/DigitalTwinColumnDistillationPhysicsInformedNeuralNetwork"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cd-github-link"
                >
                    <i className="lni lni-github"></i> View on GitHub
                </a>
            </div>

            <div className="cd-content">

                {/* What is Columnar Distillation */}
                <section className="cd-section">
                    <h2>What is Columnar Distillation?</h2>
                    <p>
                        Columnar Distillation describes a physical system whereby a binary distillation column exists.
                        The binary distillation column is a device that separates two liquids with different boiling
                        points by repeatedly vapourising and condensing them across a series of trays (n=16).
                    </p>
                    <p>
                        In this case we want to implement a Physics-Informed Neural Network to train a model to
                        simulate the distillation of two separate liquids:
                    </p>
                    <div className="cd-component-cards">
                        <div className="cd-component-card hx">
                            <h4>HX</h4>
                            <p>Higher boiling point (~82°C), less volatile. Accumulates at the bottom in the reboiler.</p>
                        </div>
                        <div className="cd-component-card tx">
                            <h4>TX</h4>
                            <p>Lower boiling point (~60°C), more volatile. Rises to the top faster.</p>
                        </div>
                    </div>
                </section>

                {/* Column Structure */}
                <section className="cd-section">
                    <h2>Column Structure</h2>
                    <p>
                        The column comprises 16 trays in total. Tray 0 at the top is the condenser and is where
                        TX-rich products leave. Tray 16 at the bottom is the reboiler and is where HX-rich products leave.
                        Feeding happens at tray 9, which is the 10th tray from the top.
                    </p>

                    <div className="cd-column-diagram">
                        <div className="cd-col-end condenser">
                            <span className="cd-tray-label">Tray 0 — Condenser</span>
                            <span className="cd-product-label tx-label">TX-rich distillate (x<sub>HX</sub> ≤ 0.055)</span>
                        </div>
                        <div className="cd-col-body">
                            <div className="cd-section-band">
                                <span className="cd-band-label">Rectifying Section — Trays 1 to 9</span>
                            </div>
                            <div className="cd-feed-row">
                                <span>Tray 9 — Feed Tray</span>
                                <span className="cd-feed-arrow">← F (z<sub>F</sub> = 0.501)</span>
                            </div>
                            <div className="cd-section-band">
                                <span className="cd-band-label">Stripping Section — Trays 10 to 15</span>
                            </div>
                        </div>
                        <div className="cd-col-end reboiler">
                            <span className="cd-tray-label">Tray 15 — Reboiler</span>
                            <span className="cd-product-label hx-label">HX-rich bottoms (x<sub>HX</sub> ≥ 0.953)</span>
                        </div>
                    </div>

                    <p>
                        The aim of separating the two components is to achieve 95% purity at both ends. Specifically,
                        we want x<sub>HX</sub> ≥ 0.953 at the reboiler and x<sub>HX</sub> ≤ 0.055 at the condenser,
                        and vice versa for x<sub>TX</sub>.
                    </p>
                </section>

                {/* Thermodynamics */}
                <section className="cd-section">
                    <h2>Thermodynamics</h2>

                    <div className="cd-subsection">
                        <h3>Vapour-Liquid Equilibrium (VLE)</h3>
                        <p>
                            <strong>Vapour-Liquid Equilibrium (VLE)</strong> is the physical state where a liquid and its
                            vapour coexist at a constant temperature and pressure, with the rate of evaporation equal to
                            the rate of condensation. No net changes occur in the system, and the vapour phase is typically
                            richer in the more volatile (lower-boiling) components.
                        </p>
                    </div>

                    <div className="cd-subsection">
                        <h3>Modified Raoult's Law</h3>
                        <p>In the Patra et al. VLE formulation for the binary HX/TX system:</p>
                        <div className="cd-math-block">
                            <code className="cd-math-code">yᵢ = γᵢ · Pᵢˢᵃᵗ(T) / P · xᵢ</code>
                        </div>
                        <ul className="cd-tech-list">
                            <li><strong>yᵢ</strong> — mole fraction of component i in the vapour phase</li>
                            <li><strong>xᵢ</strong> — mole fraction of component i in the liquid phase</li>
                            <li><strong>γᵢ</strong> — activity coefficient (non-ideality correction, estimated via Wilson equation)</li>
                            <li><strong>Pᵢˢᵃᵗ(T)</strong> — saturation pressure of component i at temperature T (from Antoine equation)</li>
                            <li><strong>P</strong> — total tray pressure</li>
                        </ul>
                        <p>For a binary system, summing to 1 gives the Bubble Point Equation:</p>
                        <div className="cd-math-block">
                            <code className="cd-math-code">xHX · PsatHX(T)/P + xTX · PsatTX(T)/P = 1</code>
                        </div>
                        <p>Given xHX and P, this is solved for T using Newton-Raphson.</p>
                    </div>

                    <div className="cd-subsection">
                        <h3>Antoine's Equation</h3>
                        <p>This gives us the saturation pressure:</p>
                        <div className="cd-math-block">
                            <code className="cd-math-code">log₁₀(Pᵢˢᵃᵗ) = Aᵢ − Bᵢ / (T + Cᵢ)</code>
                        </div>
                        <p>The Antoine constants were custom-designed to satisfy three constraints simultaneously:</p>
                        <div className="cd-detail-grid">
                            <div className="cd-detail-block">
                                <h4>Constraint 1 — Relative Volatility</h4>
                                <p>α(TX/HX) = PsatTX / PsatHX = 3.0 at 76.84°C. This tells us how separable the mixture is.</p>
                            </div>
                            <div className="cd-detail-block">
                                <h4>Constraint 2 — Bubble Point</h4>
                                <p>Bubble point at z<sub>F</sub> = 0.501, P = 104.43 kPa, T = 76.84°C.</p>
                            </div>
                            <div className="cd-detail-block">
                                <h4>Constraint 3 — Reflux Feasibility</h4>
                                <p>R<sub>min</sub> = 0.782 &lt; R = 0.81, so the reflux ratio used is just feasible.</p>
                            </div>
                        </div>
                    </div>

                    <div className="cd-subsection">
                        <h3>The vle() Function</h3>
                        <p>
                            We introduce a vle() function that solves the bubble point equation using Newton-Raphson:
                        </p>
                        <div className="cd-code-block">
                            <pre>{`def vle(x_HX: float, P: float, T0: float = 76.) -> tuple:
    """
    Newton-Raphson bubble-point (Raoult's law, ideal).
    Returns (T_bubble_C, y_HX_equilibrium).
    """
    T = float(T0)
    x = float(np.clip(x_HX, 1e-10, 1. - 1e-10))
    for _ in range(120):
        P_HX = ant("HX", T); P_TX = ant("TX", T)
        f   = x * P_HX / P + (1. - x) * P_TX / P - 1.
        B_HX = ANTOINE["HX"]["B"]; C_HX = ANTOINE["HX"]["C"]
        B_TX = ANTOINE["TX"]["B"]; C_TX = ANTOINE["TX"]["C"]
        d_HX = P_HX * np.log(10.) * B_HX / (T + C_HX) ** 2
        d_TX = P_TX * np.log(10.) * B_TX / (T + C_TX) ** 2
        df  = (x * d_HX + (1. - x) * d_TX) / P
        if abs(df) < 1e-16: break
        T  -= float(np.clip(f / df, -20., 20.))
        if abs(f) < 1e-9: break
    y_HX = ant("HX", T) * x / P
    return float(np.clip(T, 40., 200.)), float(np.clip(y_HX, 0., 1.))`}</pre>
                        </div>
                    </div>
                </section>

                {/* MESH Equations */}
                <section className="cd-section">
                    <h2>MESH Equations — Column Dynamics</h2>
                    <p>
                        MESH equations are at the heart of all simulations. They define the governing equations
                        for distillation and other physical processes:
                    </p>
                    <div className="cd-mesh-grid">
                        <div className="cd-mesh-card">
                            <span className="cd-mesh-letter">M</span>
                            <p>Material Balance</p>
                        </div>
                        <div className="cd-mesh-card">
                            <span className="cd-mesh-letter">E</span>
                            <p>Equilibrium (VLE)</p>
                        </div>
                        <div className="cd-mesh-card">
                            <span className="cd-mesh-letter">S</span>
                            <p>Summation (∑xᵢ = 1, ∑yᵢ = 1)</p>
                        </div>
                        <div className="cd-mesh-card">
                            <span className="cd-mesh-letter">H</span>
                            <p>Heat / Enthalpy Balance</p>
                        </div>
                    </div>
                    <p>
                        Throughout the codebase we use the dynamic M equations. The E is embedded via the vle() function call.
                        For each interior tray j, the material balance is:
                    </p>
                    <div className="cd-math-block">
                        <code className="cd-math-code">M · dxⱼ/dt = Lⱼ₋₁·xⱼ₋₁ − Lⱼ·xⱼ + Vⱼ₊₁·yⱼ₊₁ − Vⱼ·yⱼ + Fⱼ·zⱼ</code>
                    </div>
                    <ul className="cd-tech-list">
                        <li><strong>Lⱼ₋₁ · xⱼ₋₁</strong> — HX carried in by liquid condensed from the tray above</li>
                        <li><strong>−Lⱼ · xⱼ</strong> — HX carried out by liquid descending to the tray below</li>
                        <li><strong>Vⱼ₊₁ · yⱼ₊₁</strong> — HX carried in by vapour rising from the tray below</li>
                        <li><strong>−Vⱼ · yⱼ</strong> — HX carried out by vapour rising to the tray above</li>
                        <li><strong>Fⱼ · zⱼ</strong> — HX added by feed (non-zero only at tray 9)</li>
                        <li><strong>M = 2.5 kmol</strong> — constant molar holdup per tray</li>
                    </ul>
                    <p>
                        The 16 Ordinary Differential Equations form a stiff system that{' '}
                        <span className="cd-formula-inline">scipy.integrate.solve_ivp(method='RK45')</span> integrates
                        forward in time. The code applies an <strong>equimolar overflow assumption</strong>: L and V are
                        treated as constant within each section. This is the same simplification used in McCabe-Thiele
                        analysis, and is accurate when the heat of vapourisation differences between HX and TX are small.
                    </p>
                </section>

                {/* Flow Rates */}
                <section className="cd-section">
                    <h2>Flow Rates in the Two Sections</h2>
                    <p>
                        The column splits into two sections at the feed tray (n=10) with different flow rates.
                        The overall mass balance (from D/F = 0.503) is:
                    </p>
                    <div className="cd-math-block">
                        <code className="cd-math-code">F = D + B    and    F·zF = D·xD + B·xB</code>
                    </div>
                    <div className="cd-split">
                        <div className="cd-detail-block">
                            <h4>Rectifying Section (Trays 0–9)</h4>
                            <p>Above the feed tray:</p>
                            <div className="cd-math-inline">V = (R+1)·D &nbsp;&nbsp;&nbsp; L = R·D</div>
                        </div>
                        <div className="cd-detail-block">
                            <h4>Stripping Section (Trays 10–15)</h4>
                            <p>Below the feed tray (liquid feed, q = 1):</p>
                            <div className="cd-math-inline">L' = L + F &nbsp;&nbsp;&nbsp; V' = V</div>
                        </div>
                    </div>
                    <p style={{ marginTop: '1.5rem' }}>
                        The reflux ratio R is the key operating variable. It ramps monotonically from 0.76 to 0.86
                        over 8 hours (961 timesteps of 30 seconds each):
                    </p>
                    <div className="cd-code-block">
                        <pre>{`def reflux_arr(t: np.ndarray) -> np.ndarray:
    """Monotonic ramp 0.76->0.86 (paper mean=0.81)."""
    return 0.76 + 0.10 * np.asarray(t, float) / T_TOTAL`}</pre>
                    </div>
                    <p>
                        A higher R means more liquid is returned from the condenser per unit of distillate taken,
                        driving the column toward higher purity over time.
                    </p>
                </section>

                {/* Boundary Conditions */}
                <section className="cd-section">
                    <h2>Boundary Conditions</h2>
                    <p>The two endpoint trays have special balances:</p>
                    <div className="cd-split">
                        <div className="cd-detail-block">
                            <h4>Condenser (Tray 0)</h4>
                            <p>Total condenser — all vapour is condensed to liquid:</p>
                            <div className="cd-math-block" style={{ margin: '0.8rem 0 0.8rem' }}>
                                <code className="cd-math-code" style={{ fontSize: '0.8rem' }}>M · dx₀/dt = V₁·y₁ − (L+D)·x₀</code>
                            </div>
                            <p>No VLE calculation is needed here. The condenser just condenses all vapour to liquid,
                                so x₀ = y₀ at steady state.</p>
                        </div>
                        <div className="cd-detail-block">
                            <h4>Reboiler (Tray 15)</h4>
                            <p>Partial reboiler acting as an equilibrium stage:</p>
                            <div className="cd-math-block" style={{ margin: '0.8rem 0 0.8rem' }}>
                                <code className="cd-math-code" style={{ fontSize: '0.8rem' }}>M · dx₁₅/dt = L₁₄·x₁₄ − Ls·x₁₅ − Vs·y₁₅ + Fⱼ·zⱼ</code>
                            </div>
                            <p>A VLE step is applied here. A fraction Vs is vaporised while bottoms B = Ls − Vs exits as product.</p>
                        </div>
                    </div>
                </section>

                {/* Perturbations */}
                <section className="cd-section">
                    <h2>Perturbation Schedule and Sensor Noise</h2>
                    <p>
                        The 8-hour (961 timestep) schedule includes deliberate perturbations to stress-test the model:
                    </p>
                    <div className="cd-detail-grid">
                        <div className="cd-detail-block">
                            <h4>Feed Flow — Sinusoidal Perturbation</h4>
                            <div className="cd-math-inline">F(t) = 3823 + 400·sin(2πt/7200) + 300·[t &gt; 0.35·T<sub>total</sub>]</div>
                            <p style={{ marginTop: '0.5rem' }}>A 2-hour oscillation plus a step increase at t = 2.8h, giving 290 kg/h.</p>
                        </div>
                        <div className="cd-detail-block">
                            <h4>Column Pressure — Slow Oscillations</h4>
                            <div className="cd-math-inline">P(t) = 104.43 + 1.5·sin(2πt/14400)</div>
                        </div>
                        <div className="cd-detail-block">
                            <h4>Sensor Noise</h4>
                            <p>Uniform random noise is added to clean ODE outputs to simulate real sensor measurements.</p>
                        </div>
                    </div>
                </section>

                {/* PINN Architecture */}
                <section className="cd-section">
                    <h2>The Physics-Informed Neural Network</h2>
                    <p>
                        As is expected of PINNs, I embedded governing equations into the loss functions as additional
                        penalty terms. The network maps sensor readings to physical state predictions:
                    </p>
                    <div className="cd-math-block">
                        <code className="cd-math-code">f : ℝ¹⁷ → ℝ⁴</code>
                    </div>
                    <p>
                        <strong>Inputs:</strong> 16 sensor readings (min-max normalised) + normalised time t̂ = t / T<sub>max</sub><br />
                        <strong>Outputs:</strong> x<sub>HX</sub>, x<sub>TX</sub>, T<sub>tray</sub>, P<sub>tray</sub>
                    </p>

                    {/* Neural Network Diagram */}
                    <div className="cd-nn-diagram">
                        <div className="cd-nn-flow">
                            <div className="cd-nn-box input-box">
                                <div className="cd-nn-box-title">Input</div>
                                <div className="cd-nn-box-body">
                                    s₀ · · · s₁₅<br />t̂
                                </div>
                                <div className="cd-nn-box-sub">17</div>
                            </div>
                            <div className="cd-nn-arrow">→</div>
                            <div className="cd-nn-box hidden-box" id="l1">
                                <div className="cd-nn-box-title">Layer 1</div>
                                <div className="cd-nn-box-body">256</div>
                                <div className="cd-nn-box-sub">Swish</div>
                            </div>
                            <div className="cd-nn-arrow">→</div>
                            <div className="cd-nn-box hidden-box" id="l2">
                                <div className="cd-nn-box-title">Layer 2</div>
                                <div className="cd-nn-box-body">256</div>
                                <div className="cd-nn-box-sub">Swish</div>
                            </div>
                            <div className="cd-nn-arrow">→</div>
                            <div className="cd-nn-box hidden-box skip-target">
                                <div className="cd-nn-box-title">Layer 3</div>
                                <div className="cd-nn-box-body">128</div>
                                <div className="cd-nn-box-sub">Swish + skip₁</div>
                            </div>
                            <div className="cd-nn-arrow">→</div>
                            <div className="cd-nn-box hidden-box skip-target">
                                <div className="cd-nn-box-title">Layer 4</div>
                                <div className="cd-nn-box-body">64</div>
                                <div className="cd-nn-box-sub">Swish + skip₂</div>
                            </div>
                            <div className="cd-nn-arrow">→</div>
                            <div className="cd-nn-box output-box">
                                <div className="cd-nn-box-title">Output</div>
                                <div className="cd-nn-box-body">
                                    <span className="cd-out-sig">x<sub>HX</sub></span>
                                    <span className="cd-out-sig">x<sub>TX</sub></span>
                                    <span className="cd-out-lin">T</span>
                                    <span className="cd-out-lin">P</span>
                                </div>
                                <div className="cd-nn-box-sub">4</div>
                            </div>
                        </div>
                        <div className="cd-skip-note">
                            <span className="cd-skip-line">skip₁: Layer 1 → Layer 3 &nbsp;|&nbsp; skip₂: Layer 2 → Layer 4</span>
                        </div>
                        <div className="cd-nn-legend">
                            <span className="cd-legend-item"><span className="cd-legend-dot sig-dot"></span> Sigmoid output</span>
                            <span className="cd-legend-item"><span className="cd-legend-dot lin-dot"></span> Linear output</span>
                        </div>
                    </div>

                    <div className="cd-subsection">
                        <h3>Input Layer</h3>
                        <p>
                            Takes in a tensor of 17 values whereby the first 16 are the min-max normalised sensor
                            readings and the last is the normalised time unit.
                        </p>
                    </div>

                    <div className="cd-subsection">
                        <h3>Hidden Layers</h3>
                        <p>
                            Four hidden layers with widths of 256, 256, 128, and 64 respectively. Each uses Swish
                            activation instead of ReLU because of the smooth curve required for oscillatory physics
                            and to avoid the dead neuron problem usually associated with ReLU:
                        </p>
                        <div className="cd-math-block">
                            <code className="cd-math-code">σ(z) = z · sigmoid(z) = z / (1 + e⁻ᶻ)</code>
                        </div>
                        <p>
                            Hidden Layers 3 and 4 accept residual (skip) connections from Layers 1 and 2 respectively:
                        </p>
                        <div className="cd-math-block">
                            <code className="cd-math-code">{`h⁽³⁾ = σ(W⁽³⁾h⁽²⁾ + b⁽³⁾) + W₁₃ˢᵏⁱᵖ · h⁽¹⁾
h⁽⁴⁾ = σ(W⁽⁴⁾h⁽³⁾ + b⁽⁴⁾) + W₂₄ˢᵏⁱᵖ · h⁽²⁾`}</code>
                        </div>
                        <p>
                            The skip connections are meant to enhance gradient flow. Physics residuals in
                            physics-constrained training often produce large, non-uniform gradients in early epochs.
                            Skip connections allow gradients to propagate to early layers without vanishing.
                        </p>
                    </div>

                    <div className="cd-subsection">
                        <h3>Output Layer</h3>
                        <p>
                            Mole fractions use sigmoid activations to ensure x ∈ (0,1). Both are then renormalised
                            to enforce the binary summation constraint exactly:
                        </p>
                        <div className="cd-math-block">
                            <code className="cd-math-code">{`x*HX = xHX / (xHX + xTX)
x*TX = 1 − x*HX`}</code>
                        </div>
                        <p>
                            Temperature and pressure are linear outputs and hence do not require activation.
                            Technically, the pressure is calculated from temperature using Antoine's equation.
                        </p>
                    </div>
                </section>

                {/* Composite Loss */}
                <section className="cd-section">
                    <h2>Composite Loss Function</h2>
                    <div className="cd-math-block">
                        <code className="cd-math-code">ℒ = δ⁽ᵏ⁾ · ℒdata + φ⁽ᵏ⁾ · ℒphys + λBC · ℒBC</code>
                    </div>

                    <div className="cd-subsection">
                        <h3>ℒdata — Fitting the Labels</h3>
                        <p>Penalises the squared deviation from target mole fractions:</p>
                        <div className="cd-math-block">
                            <code className="cd-math-code">ℒdata = (1/N) Σ [(xHX,i − TargetHX,i)² + (xTX,i − TargetTX,i)²]</code>
                        </div>
                        <p>
                            Weight δ⁽ᵏ⁾ starts near zero and rises to ~1 by epoch 500 via a sigmoid schedule.
                            For the first 300 epochs this term contributes almost nothing to the gradients,
                            ensuring the network first learns from the physics principles.
                        </p>
                    </div>

                    <div className="cd-subsection">
                        <h3>ℒphys — Governing Physics (PINN Term)</h3>
                        <p>
                            Evaluated at 2000 collocation points sampled uniformly across the sensor feature space.
                            These points carry no labels — the network must satisfy the governing equations purely
                            from what it has learned. Three physical residuals are aggregated:
                        </p>
                        <div className="cd-math-block">
                            <code className="cd-math-code">ℒphys = RVLE + RMESH + Renergy</code>
                        </div>
                    </div>

                    <div className="cd-subsection">
                        <h3>Residual 1: VLE</h3>
                        <div className="cd-math-block">
                            <code className="cd-math-code">RVLE = (1/Nc) Σ (yHX,c − PsatHX(Tc) · xHX,c / Pc)²</code>
                        </div>
                        <p>
                            If the network predicts xHX = 0.50 but T = 90°C — which would give a different PsatHX
                            and hence a different equilibrium yHX — this residual is non-zero and penalises the
                            prediction. The neural network cannot independently set xHX, T, and P. The VLE function
                            ties them together thermodynamically.
                        </p>
                    </div>

                    <div className="cd-subsection">
                        <h3>Residual 2: MESH (Component Mass Balance)</h3>
                        <div className="cd-math-block">
                            <code className="cd-math-code">RMESH = (1/Nc) Σ Σⱼ (M·∂xⱼ/∂t − [Lⱼ₋₁·xⱼ₋₁ + Vⱼ₊₁·yⱼ₊₁ − Vⱼ·yⱼ + Fⱼ·zⱼ])²</code>
                        </div>
                        <p>
                            This residual enforces that the rate of change of HX on each of the 16 trays must equal the
                            net HX flowing in minus net HX flowing out. This is the same equation mesh_rhs() implements.
                            The PINN is in essence being asked to recreate the physics of the ODE that generated the data.
                        </p>
                        <p>
                            The flow rates Lⱼ, Vⱼ are computed from sensor values for reflux ratio R and feed flow F,
                            taken directly from the collocation point. The finite difference uses Δt = 30s, matching
                            the 30-second sampling window. This is why temporal ordering of data matters.
                        </p>
                    </div>

                    <div className="cd-subsection">
                        <h3>Residual 3: Energy Balance</h3>
                        <div className="cd-math-block">
                            <code className="cd-math-code">Renergy = (1/Nc) Σ (d(Mⱼ·Hⱼ)/dt − [Lⱼ₊₁·HLⱼ₊₁ + Vⱼ₋₁·HVⱼ₋₁ + Fⱼ·HFⱼ + Qⱼ])²</code>
                        </div>
                        <p>
                            This enforces the enthalpy balance on each tray — the thermal energy arriving and leaving must
                            be consistent with the predicted temperature. HLⱼ and HVⱼ are liquid and vapour enthalpies
                            computed from Tⱼ. The reboiler duty Qⱼ relates to sensor S16 (held at 0 in the dataset).
                        </p>
                        <p>
                            This is the weakest residual because the generator uses equimolar overflow, which implicitly
                            assumes heat of vapourisation is constant and equal. The energy balance is approximately
                            satisfied by construction, so its residual is small throughout training.
                        </p>
                        <p>
                            Weight φ⁽ᵏ⁾ starts near 1 and decays to ~0.02 after epoch 400. For the first 300 epochs,
                            the physics loss is the dominant signal.
                        </p>
                    </div>

                    <div className="cd-subsection">
                        <h3>ℒBC — Boundary Condition</h3>
                        <div className="cd-math-block">
                            <code className="cd-math-code">ℒBC = |xHX + xTX − 1| + max(0, Tdew − T)²</code>
                        </div>
                        <ul className="cd-tech-list">
                            <li>
                                <strong>Binary constraint:</strong> xHX + xTX must always be equal to 1.
                                This is hard-wired by the output renormalisation.
                            </li>
                            <li>
                                <strong>Temperature floor:</strong> T must exceed the dew point temperature Tdew.
                                If the network predicts a temperature below Tdew, the mixture cannot exist as liquid
                                on the tray — it would fully vapourise. In this system, the dew point at xHX = 0.5
                                and P = 104.43 kPa is approximately 82°C.
                            </li>
                        </ul>
                        <p>
                            The hinge function max(0, ·) means this term is zero when T &gt; Tdew and activates only
                            when the network wanders into an unphysical region.
                        </p>
                    </div>

                    <div className="cd-subsection">
                        <h3>Sigmoid Curriculum — Why the Weighting Schedule Matters</h3>
                        <p>
                            The sigmoid schedule ensures physics dominates early training before the data loss
                            gradually takes over:
                        </p>
                        <div className="cd-math-block">
                            <code className="cd-math-code">{`δ⁽ᵏ⁾ = 1 / (1 + e⁻⁰·⁰²⁽ᵏ⁻³⁰⁰⁾)
φ⁽ᵏ⁾ = 1 − δ⁽ᵏ⁾`}</code>
                        </div>
                        <p>
                            For the first 300 epochs, the physics loss is the dominant signal. This ensures that the
                            network mainly learns from the physics principles before being allowed to fit the observations.
                        </p>
                    </div>
                </section>

                {/* Summary */}
                <section className="cd-section cd-highlight-section">
                    <h2>Summary</h2>
                    <div className="cd-contributions-grid">
                        <div className="cd-contribution-item">
                            <span className="cd-num">1</span>
                            <p>Physics-Informed Neural Network trained on ODE-generated distillation data.</p>
                        </div>
                        <div className="cd-contribution-item">
                            <span className="cd-num">2</span>
                            <p>Composite loss with VLE, MESH, and energy balance residuals as physics penalty terms.</p>
                        </div>
                        <div className="cd-contribution-item">
                            <span className="cd-num">3</span>
                            <p>Sigmoid curriculum that transitions from physics-dominant to data-dominant training.</p>
                        </div>
                        <div className="cd-contribution-item">
                            <span className="cd-num">4</span>
                            <p>Residual skip connections to stabilise gradients under large physics residuals.</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default ColumnarDistillation;
