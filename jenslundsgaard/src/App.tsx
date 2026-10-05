import './App.css'

function App() {
  return (
    <article className="markdown">
      <h1>Jens Lundsgaard</h1>
      <p>
        224-434-8513 · <a href="mailto:jenslundsgaard7@gmail.com">jenslundsgaard7@gmail.com</a>
        <br />
        
	<a href="github.com/JensLundsgaard">Github</a> ·{' '} <a href="linkedin.com/in/jens-lundsgaard-13700625b">LinkedIn</a>
      </p>

      <h2>Education</h2>
      <p>
        <strong>Bachelor of Science in Mathematics and Computer Sciences</strong> —{' '}
        <em>September 2023 – May 2026</em>
        <br />
        University of Wisconsin-Madison
      </p>
      <p>Completed degrees in 3 years.</p>
      <p>
        <strong>Relevant coursework:</strong> Elementary Topology, Analysis I, Linear Algebra,
        Programming III: Data Structures and Algorithms, Discrete Math and Introduction to
        Proofs, Introduction to Databases.
      </p>

      <h2>Publications and Preprints</h2>
      <ul>
        <li>
          <u>J. Lundsgaard</u>*, C. Mikulski*, J. Yan, D. Bhaskar.{' '}
          <strong>
            <code>spinet</code>: Sheaf Protein Inverse Folding Network
          </strong>
          , 2026. (Submitted to MoML 2026)
        </li>
        <li>
          <u>J. Lundsgaard</u>, R. Ho, A. Balaji, D. Bhaskar.{' '}
          <strong>
            From Morphokinetics to Morphodynamics: Unsupervised Learning of Embryo Development
            Trajectories for IVF
          </strong>
          , 2026. (Submitted to Frontiers in Imaging 2026)
        </li>
      </ul>
      <blockquote>* Equal contribution</blockquote>

      <h2>Research Experience</h2>
      <p>
        <strong>Computational Biology and Machine Learning Group, UW-Madison</strong> —{' '}
        <em>October 2025 – Present</em>
        <br />
        Advisor: Prof. Dhananjay Bhaskar
      </p>

      <h3>Sheaf Protein Dynamics Inverse Folding</h3>
      <ul>
        <li>
          Developed a sheaf neural network for predicting amino acid residue classes from
          dynamics data using cellular sheaves to model heterophily on graphs.
        </li>
        <li>Innovated by developing a dynamics embedding that learns a sheaf per timestep.</li>
        <li>
          Used the sheaf Laplacian for downstream interpretation and analysis by studying its
          eigenspectrum.
        </li>
        <li>
          Submitted to MoML at MIT and currently refining the methodology further.
        </li>
      </ul>

      <h3>IVF Morphodynamics</h3>
      <ul>
        <li>
          Developed a convolutional recurrent autoencoder model with PyTorch to embed human IVF
          embryo time-series image data for downstream morpho-dynamic analysis.
        </li>
        <li>
          Developed recurrent architectures for embryo quality and developmental milestone
          prediction, the latter using negative log likelihood loss for Viterbi sequence
          decoding.
        </li>
        <li>
          Studied human embryo developmental biology by analyzing latent trajectories to
          understand how growth dynamics affect blastocyst-stage trophectoderm and inner cell
          mass qualities.
        </li>
        <li>Used path signatures to quantify the shape of paths.</li>
      </ul>

      <h2>Awards and Honors</h2>
      <p>
        <strong>Midwest Machine Learning Symposium Travel Award</strong> — Purdue University,{' '}
        <em>June 2026</em>
      </p>

      <h2>Contributed Talks</h2>
      <p>
        <strong>Undergraduate Research Symposium</strong>, From Morphokinetics to Morphodynamics:
        Unsupervised Learning of Embryo Developmental Trajectories for IVF
        <br />
        University of Wisconsin-Madison — <em>April 2026</em>
      </p>

      <h2>Poster Presentations</h2>
      <p>
        <strong>Molecular Machine Learning Conference</strong>, <code>spinet</code>: Sheaf
        Protein Inverse Folding Network
        <br />
        Massachusetts Institute of Technology — <em>October 2026</em>
      </p>
	<p>
        <strong>Applied Algebraic Topology Research Network Poster Session</strong>, <code>spinet</code>: Sheaf
        Protein Inverse Folding Network
        <br />
        Virtual — <em>September 2026</em>
      </p>
      <p>
        <strong>Biophysics Colloquium</strong>, <code>spinet</code>: Sheaf Protein Inverse
        Folding Network
        <br />
        University of Wisconsin-Madison — <em>September 2026</em>
      </p>
      <p>
        <strong>Midwest Machine Learning Symposium</strong>, From Morphokinetics to
        Morphodynamics: Unsupervised Learning of Embryo Development Trajectories for IVF
        <br />
        Purdue University — <em>June 2026</em>
      </p>

      <h2>Projects</h2>
      <h3>
        Sheaf and Category Theory Study — <em>November 2025 – December 2025</em>
      </h3>
      <ul>
        <li>
          Studied Daniel Rosiak’s Sheaf Theory through Examples, conceptualizing important sheaf
          and category theory concepts such as gluing and locality axioms and their
          generalizations, commutative diagrams, hom-functors, (co)limits, categories of
          (co)cones, and comma categories.
        </li>
        <li>Proved theorems to develop a rigorous understanding of sheaf theory.</li>
      </ul>

      <h2>Memberships</h2>
      <p>
        <strong>American Mathematical Society</strong> — <em>August 2026</em>
      </p>
      <p>
        <strong>Society of Industrial and Applied Mathematics</strong> — <em>January 2026</em>
      </p>
    </article>
  )
}

export default App

