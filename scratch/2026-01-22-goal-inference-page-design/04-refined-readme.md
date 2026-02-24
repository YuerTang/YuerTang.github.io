# Refined README Proposal

This document proposes a refined README.md for the Online_Goal_Inference_Modeling repository.

---

# Online Goal Inference

<div align="center">

**Real-time Bayesian inference of human intentions from observed actions**

[Demo](https://yuertang.github.io/projects/goal-inference) · [Paper](#) · [Video](#)

![Demo Animation](assets/demo.gif)

</div>

---

## What is this?

When you watch someone walking through a building, you can often guess where they're heading—even before they arrive. This project implements a computational model that does the same thing: it watches a person navigate and continuously updates its beliefs about their goal.

The system combines:
- **Markov Decision Processes** to model optimal behavior toward each goal
- **Softmax policies** to account for imperfect human decisions
- **Bayesian inference** to update beliefs as new actions are observed

## Quick Start

```bash
# Clone and install
git clone https://github.com/YuerTang/Online_Goal_Inference_Modeling.git
cd Online_Goal_Inference_Modeling
pip install flask flask-socketio numpy scipy

# Run
python server.py
# Open http://localhost:3000
```

Use arrow keys to navigate. Watch the belief bars update in real-time!

## How It Works

### The Core Idea

Given observed actions, compute the probability of each goal:

```
P(goal | actions) ∝ P(actions | goal) × P(goal)
```

### The Algorithm

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   For each goal G ∈ {G₁, G₂, G₃}:                               │
│                                                                 │
│   1. Compute optimal policy π*(s) using Value Iteration         │
│   2. Convert to softmax policy: P(a|s,G) ∝ exp(Q(s,a)/τ)        │
│                                                                 │
│   Then:                                                         │
│                                                                 │
│   3. For each observed (state, action) pair:                    │
│      - Compute likelihood under each goal's policy              │
│      - Update posterior using Bayes' rule                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Bounded Rationality

Real humans don't always act optimally. The temperature parameter τ controls how "noisy" we expect behavior to be:
- τ → 0: Assume perfectly rational behavior
- τ → ∞: Assume random behavior
- τ = 5 (default): Allow some suboptimality

## Project Structure

```
Online_Goal_Inference_Modeling/
├── server.py            # Flask server + game logic
├── inference.py         # Bayesian goal inference
├── ValueIteration.py    # MDP solver
├── index.html           # Game interface
├── spmg.js              # Frontend game client
└── requirements.txt     # Python dependencies
```

### Key Classes

| Class | File | Purpose |
|-------|------|---------|
| `UpdatePosteriorClass` | inference.py | Main inference engine |
| `ValueIteration` | ValueIteration.py | Computes optimal value functions |
| `GetPolicy` | ValueIteration.py | Extracts softmax policy from values |
| `GoalInferenceMap` | inference.py | Stores policy for one goal |

## API Usage

```python
from inference import UpdatePosteriorClass

# Define environment
custom_map = {
    'playerPosition': (0, 0),
    'goals': [(9, 0), (9, 4), (9, 9)],
    'blocks': [(4, 0), (4, 1), (7, 1), (4, 3)]
}

# Initialize inference
inference = UpdatePosteriorClass(custom_map)

# Update with observed action
state_after = (1, 0)  # New position
action = (1, 0)       # Move right
posterior = inference(state_after, action)

print(posterior)
# {'G1': 0.35, 'G2': 0.40, 'G3': 0.25}
```

## Configuration

### MDP Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `gamma` | 1.0 | Discount factor |
| `navigationCost` | -5 | Cost per step |
| `goalReward` | 100 | Reward for reaching goal |
| `trapReward` | -100 | Penalty for obstacles |

### Inference Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `temperature` | 5 | Softmax temperature (bounded rationality) |
| `decayFactor` | 0.9 | Prior decay for changing intentions |

## References

This work builds on foundational research in computational cognitive science:

1. **Baker, C. L., Saxe, R., & Tenenbaum, J. B. (2009)**
   *Action understanding as inverse planning*
   Cognition, 113(3), 329-349.
   [doi:10.1016/j.cognition.2009.07.005](https://doi.org/10.1016/j.cognition.2009.07.005)

2. **Zhi-Xuan, T., Mann, J., Silver, T., Tenenbaum, J. B., & Mansinghka, V. K. (2020)**
   *Online Bayesian Goal Inference for Boundedly-Rational Planning Agents*
   NeurIPS 33.
   [Paper](https://proceedings.neurips.cc/paper/2020/hash/df3aebc649f9e3b674eeb790a4da224e-Abstract.html)

## Citation

```bibtex
@misc{tang2024goalinference,
  author    = {Tang, Yuer and Gao, Tao},
  title     = {Online Bayesian Goal Inference},
  year      = {2024},
  publisher = {GitHub},
  url       = {https://github.com/YuerTang/Online_Goal_Inference_Modeling}
}
```

## License

MIT License - see [LICENSE](LICENSE) for details.

---

<div align="center">

**[Yuer Tang](https://yuertang.github.io)** · UCLA · 2024

</div>

---

## Changes from Current README

### Removed
- ❌ External image URLs (replaced with local assets)
- ❌ Incorrect file references (style.css, client.js don't exist)
- ❌ Incorrect color legend (green/red/yellow doesn't match implementation)
- ❌ Generic placeholder contact info
- ❌ Excessive emoji usage
- ❌ Redundant badges

### Added
- ✅ Clear "What is this?" explanation in plain language
- ✅ Simplified quick start (one-liner install)
- ✅ ASCII diagram of algorithm
- ✅ Configuration parameter tables
- ✅ Correct file structure
- ✅ API usage with realistic example
- ✅ Proper attribution and links

### Improved
- ✅ More concise structure
- ✅ Technical details moved to tables
- ✅ Better visual hierarchy
- ✅ Accurate documentation matching actual code
