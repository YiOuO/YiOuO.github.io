---
title: "An enhanced SPH-based hydroelastic FSI solver with structural dynamic hourglass control"
collection: publications
category: manuscripts
permalink: /publication/DualSPHysics+FSI
excerpt: 'DualSPHysics+ & FSI'
date: 2025-01-01
venue: 'Journal of Fluids and Structures'
# slidesurl: 'http://academicpages.github.io/files/slides2.pdf'
# paperurl: 'http://academicpages.github.io/files/paper2.pdf'
citation: 'Yi Zhan, Min Luo, and Abbas Khayyer. "An enhanced SPH-based hydroelastic FSI solver with structural dynamic hourglass control." Journal of Fluids and Structures 135 (2025): 104295.'
---

This paper presents an enhanced hydroelastic FSI (Fluid-Structure Interaction) solver based on the open-source SPH (Smoothed Particle Hydrodynamics) code DualSPHysics+. For the structure model, a second-order discretization of the deformation gradient tensor (F2nd) is implemented to improve the accuracy of stress and strain computation. To mitigate numerical noises in the reproduced stress fields and improve numerical stability, a Riemann Stabilization (RS) term is incorporated in the structural momentum equation. A Dynamic Hourglass Control (DHGC) scheme being parameter-free is proposed to mitigate the spurious zero-energy modes linked with rank deficiency as a challenging issue for collocated computational methods including the total Lagrangian SPH. The novelty of this scheme is that it dynamically adjusts the hourglass control coefficient based on the instantaneous state of particle distributions and time evolution of an error function. For the fluid model, the Velocity divergence Error Mitigating (VEM) scheme and Hyperbolic/Parabolic Divergence Cleaning (HPDC) scheme are adopted to suppress spurious fluid pressure noises and hence enhance the modelling of fluid-structure interactions. Validations in terms of robustness and accuracy of the proposed model are carried out via five structure examples and three FSI ones. The results demonstrate that more physically consistent stress and strain fields are reproduced by the implementation of F2nd and RS. The proposed DHGC scheme effectively suppresses hourglass modes and is case- and resolution-independent (in contrast to the traditional Hourglass Control scheme). The incorporation of the VEM and HPDC mitigates fluid pressure noises and further enhances the accuracy of FSI simulations.

![](/images/publications/DualSPHysics+FSI_abstract.png)