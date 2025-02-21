---
title: "DualSPHysics+: An enhanced DualSPHysics with improvements in accuracy, energy conservation and resolution of the continuity equation"
collection: publications
category: manuscripts
permalink: /publication/DualSPHysics+
excerpt: 'The enhanced version of DualSPHysics'
date: 2025-01-01
venue: 'Computer Physics Communications '
slidesurl: 'http://YiOuO.github.io/files/DualSPHysics+_Slides.pdf'
paperurl: 'http://YiOuO.github.io/files/DualSPHysics+_Manuscript.pdf'
citation: 'Yi Zhan, Min Luo, and Abbas Khayyer. "DualSPHysics+: An enhanced DualSPHysics with improvements in accuracy, energy conservation and resolution of the continuity equation." Computer Physics Communications 306 (2025): 109389.'
---

This paper presents an enhanced version of the well-known SPH (Smoothed Particle Hydrodynamics) open-source code DualSPHysics for the simulation of free-surface fluid flows, leading to the DualSPHysics+ code. The enhancements are made through incorporation of several schemes with respect to stability, accuracy and energy/volume conservation issues in simulating incompressible free-surface fluid flows within the weakly compressible SPH formalism. The Optimized Particle Shifting (OPS) scheme is implemented to improve the accuracy of particle shifting vectors in the free-surface region. To mitigate energy dissipation and maintain consistency, the artificial viscosity in -SPH is substituted with a Riemann stabilization term, leading to the δR-SPH. The Velocity divergence Error Mitigating (VEM) and Volume Conservation Shifting (VCS) schemes are adopted in DualSPHysics+ to mitigate the velocity divergence error and improve the volume conservation, and hence to enhance the resolution of the continuity equation. To further reduce both the instantaneous and accumulated errors in velocity divergence, a Hyperbolic/Parabolic Divergence Cleaning (HPDC) scheme is incorporated in addition to the VEM scheme. The implementations of the introduced schemes on both CPU and GPU-based versions of the DualSPHysics+ code along with details on the compilation, running and computational performance are presented. Validations in terms of accuracy, energy conservation and convergence of DualSPHysics+ are shown via several relevant benchmarks. It is demonstrated that a better velocity divergence error cleaning in both instantaneous and accumulated errors can be achieved by the combination of VEM and HPDC. Meanwhile, the excessive energy dissipation by the artificial viscosity is shown to be suppressed by adopting the Riemann stabilization term. Enhanced resolution of the continuity equation along with improved energy conservation of DualSPHysics+ advance the SPH-based simulation of incompressible free-surface fluid flows.

![](/images/publications/DualSPHysics+_abstract.png)

<video width="800" height="600" controls>
  <source src="/images/talks/DualSPHysics+CPC.mp4" type="video/mp4">
  <!-- Your browser does not support the video tag. -->
</video>