---
title: "An enhanced numerical wave tank for wave-structure interaction based on DualSPHysics+"
collection: publications
category: manuscripts
permalink: /publication/DualSPHysics+Wave
excerpt: 'DualSPHysics+ & Numerical wave tank'
date: 2025-01-01
# venue: 'Ocean Engineering'
# slidesurl: 'http://academicpages.github.io/files/slides3.pdf'
# paperurl: 'http://academicpages.github.io/files/paper3.pdf'
citation: 'Submit to OE'
---

Wave-structure interaction (WSI) is a fundamental problem in ocean and coastal engineering. In this paper, an enhanced numerical wave tank for WSI simulations is developed based on the open-source Smoothed Particle Hydrodynamics (SPH) code DualSPHysics+. The combination of the δ-SPH density diffusion term and a Riemann dissipation term (δR-SPH) is adopted to mitigate unphysical energy dissipation and thereby reduce wave attenuation. To suppress pressure oscillations during the WSI process, the Velocity Divergence Error Mitigation (VEM) and Hyperbolic/Parabolic Divergence Cleaning (HPDC) schemes are used. The Volume Conservation Shifting (VCS) scheme is employed to enhance volume conservation during long-distance wave propagation, while the Optimized Particle Shifting (OPS) scheme is introduced to improve the distribution of free surface particles. For the structural model, a second-order discretization of the momentum equation and a dynamic hourglass control scheme are implemented to enhance stress prediction accuracy and suppress spurious zero-energy modes. The developed numerical wave tank is validated against several two-dimensional and three-dimensional benchmark cases. The numerical results demonstrate enhance performance of the developed numerical wave tank in mitigating numerical dissipation and hence unphysical wave attenuations, enhancing global volume conservation, and suppressing numerical noises in fluid pressures. By incorporating the enhanced schemes in both the fluid and structural fields, the processes of wave generation, propagation, and interaction with the structure can be reproduced with higher accuracy and enhanced physical consistency.