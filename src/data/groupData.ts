import GroupDto from "../models/groupDto";
import BookDto from "../models/bookDto";
import elementaryAlgebraImg from "../assets/elementary-algebra.jpg";
import preAlgebraImg from "../assets/pre-algebra.jpg";

const algebra = new GroupDto(0, "Algebra", [
  new BookDto("Pre-Algebra Mathematics", preAlgebraImg, 0, 36),
  new BookDto("Elementary Algebra", elementaryAlgebraImg, 0, 50),
]);

const discreteMath = new GroupDto(1, "Discrete Math", [
  new BookDto(
    "Discrete Mathematical Structures",
    discreteMathStructuresImg,
    1,
    35
  ),
  new BookDto("Concrete Mathematics", concreteMathImg, 2, 12),
  new BookDto(
    "Discrete Mathematics and its Applications",
    discreteMathAppsImg,
    2,
    55
  ),
  new BookDto(
    "Discrete and Combinatorial Mathematics",
    discreteCombinatorialImg,
    2,
    55
  ),
]);

const proofWriting = new GroupDto(2, "Proof Writing", [
  new BookDto(
    "An Introduction To Abstract Mathematics",
    introAbstractMathImg,
    3,
    46
  ),
  new BookDto(
    "Foundations of Higher Mathematics",
    foundationsHigherMathImg,
    4,
    8
  ),
  new BookDto("How to Read and Do Proofs", howToReadDoProofsImg, 4, 20),
  new BookDto("How To Prove It", howToProveItImg, 4, 32),
]);

const preCalculusTrigonometry = new GroupDto(3, "Pre-Calculus/Trigonometry", [
  new BookDto("Precalculus", precalculusStewartImg, 5, 52),
  new BookDto("College Algebra", collegeAlgebraImg, 6, 18),
  new BookDto(
    "A Graphical Approach To Algebra and Trigonometry",
    graphicalApproachImg,
    6,
    51
  ),
  new BookDto("Algebra and Trigonometry", algebraTrigonometryStewartImg, 7, 17),
  new BookDto(
    "Algebra and Trigonometry",
    algebraTrigonometrySullivanImg,
    7,
    25
  ),
  new BookDto("Trigonometry", trigonometryOutlineImg, 7, 43),
  new BookDto("Algebra and Trigonometry", algebraTrigonometryCameronImg, 8, 5),
  new BookDto("Pre-Calculus Mathematics", preCalculusShanksImg, 8, 20),
  new BookDto("Trigonometry", trigonometryMcMullenImg, 8, 48),
  new BookDto("Plane Trigonometry", planeTrigonometryImg, 9, 28),
]);

const calculus = new GroupDto(4, "Calculus", [
  new BookDto("Calculus With Analytic Geometry", calculusSwokowskiImg, 10, 17),
  new BookDto("Calculus", calculusLarsonImg, 10, 39),
  new BookDto("Thomas' Calculus", thomasCalculusImg, 10, 58),
  new BookDto("Calculus", calculusStewartImg, 11, 26),
  new BookDto("Essential Calculus Workbook", calculusMcMullenImg, 12, 0),
  new BookDto(
    "Calculus with Multiple Variables Workbook",
    calculusMultipleVariablesImg,
    9,
    46
  ),
]);

const differentialEquations = new GroupDto(5, "Differential Equations", [
  new BookDto("Schaum's Outlines Differential Equations", schaumsDEImg, 13, 31),
  new BookDto("Differential Equations", diffEquationsNagleImg, 13, 58),
  new BookDto(
    "A First Course in Differential Equations",
    diffEquationsZillImg,
    14,
    21
  ),
]);

const probabilityStatistics = new GroupDto(6, "Probability/Statistics", [
  new BookDto(
    "Schaum's Outlines Probability and Statistics",
    schaumsProbStatsImg,
    14,
    54
  ),
  new BookDto("Elementary Statistics", elementaryStatsImg, 15, 9),
  new BookDto(
    "Mathematical Statistics and Data Analysis",
    mathStatsDataAnalysisImg,
    15,
    32
  ),
  new BookDto(
    "A First Course in Probability",
    firstCourseProbabilityImg,
    15,
    58
  ),
]);

const geometry = new GroupDto(7, "Geometry", [
  new BookDto("Geometry", geometryImg, 16, 20),
]);

const linearAlgebra = new GroupDto(8, "Linear Algebra", [
  new BookDto(
    "Schaum's Outlines Linear Algebra",
    schaumsLinearAlgebraImg,
    16,
    44
  ),
  new BookDto("Elementary Linear Algebra", elementaryLinearAlgebraImg, 17, 9),
  new BookDto("Linear Algebra", linearAlgebraHoffmanImg, 18, 5),
  new BookDto("Linear Algebra", linearAlgebraFriedbergImg, 18, 15),
]);

const complexVariables = new GroupDto(9, "Complex Variables", [
  new BookDto(
    "Schaum's Outlines Complex Variables",
    schaumsComplexVariablesImg,
    18,
    52
  ),
  new BookDto("Complex Variables", complexVariablesBrownChurchillImg, 19, 19),
  new BookDto(
    "Fundamentals of Complex Analysis ",
    fundamentalsComplexAnalysisImg,
    19,
    53
  ),
  new BookDto("Applied Complex Variables", appliedComplexVariablesImg, 20, 28),
  new BookDto("Complex Variables", complexVariablesAblowitzFokasImg, 20, 50),
]);

const partialDifferentialEquations = new GroupDto(
  10,
  "Partial Differential Equations",
  [
    new BookDto(
      "Introduction to Partial Differential Equations",
      introPartialDiffEquationsImg,
      21,
      38
    ),
    new BookDto(
      "Partial Differential Equations (Strauss)",
      partialDiffEquationsStraussImg,
      21,
      46
    ),
    new BookDto(
      "Schaum's Outline Partial Differential Equations",
      schaumsPartialDiffEquationsImg,
      21,
      58
    ),
    new BookDto(
      "Partial Differential Equations",
      partialDiffEquationsMillerImg,
      22,
      4
    ),
  ]
);

const abstractAlgebra = new GroupDto(11, "Abstract Algebra", [
  new BookDto(
    "A First Course in Abstract Algebra",
    firstCourseAbstractAlgebraImg,
    22,
    26
  ),
  new BookDto(
    "Contemporary Abstract Algebra",
    contemporaryAbstractAlgebraImg,
    22,
    57
  ),
  new BookDto("Abstract Algebra", abstractAlgebraSaracinoImg, 23, 27),
  new BookDto(
    "Abstract Algebra with a Concrete Introduction",
    abstractAlgebraBeachyBlairImg,
    23,
    48
  ),
  new BookDto("Abstact Algebra", algebraArtinImg, 24, 28),
  new BookDto(
    "Abstract Algebra (Dummit and Foote)",
    abstractAlgebraDummitFooteImg,
    24,
    49
  ),
  new BookDto("Graduate Texts in Mathematics", algebraLangImg, 25, 20),
]);

const realAnalysis = new GroupDto(12, "Real Analysis", [
  new BookDto(
    "Principles of Mathematical Analysis",
    principlesMathAnalysisImg,
    25,
    53
  ),
  new BookDto("Advanced Calculus", advancedCalculusImg, 26, 35),
  new BookDto("Introduction to Real Analysis", introRealAnalysisImg, 27, 3),
  new BookDto("Analysis 1", analysisLangImg, 27, 37),
  new BookDto("Understanding Analysis", understandingAnalysisImg, 27, 44),
  new BookDto("Advanced Calculus", advancedCalculusBuckImg, 27, 53),
]);

const numberTheory = new GroupDto(13, "Number Theory", [
  new BookDto(
    "Elementary Introduction to Number Theory",
    numberTheoryLongImg,
    28,
    14
  ),
  new BookDto("Number Theory", numberTheoryAndrewsImg, 28, 14),
  new BookDto("Elementary Number Theory)", numberTheoryDudleyImg, 28, 14),
]);

const graphTheory = new GroupDto(14, "Graph Theory", [
  new BookDto("Graph Theory", graphTheoryImg, 28, 50),
]);

const topology = new GroupDto(15, "Topology", [
  new BookDto("Schaum's Outlines Topology", schaumsTopologyImg, 29, 33),
  new BookDto("Introduction to Topology", topologyMendelsonImg, 29, 57),
  new BookDto("Introduction to Topology", topologyGamelineGreeneImg, 30, 12),
  new BookDto("Topology", topologyMunkresImg, 30, 31),
]);

const misc = new GroupDto(16, "Misc", [
  new BookDto("All the Math You Missed", mathYouMissedImg, 31, 35),
  new BookDto("Introduction to Cryptography", cryptographyImg, 32, 25),
  new BookDto(
    "Advanced Engineering Mathematics",
    advancedEngineeringMathImg,
    33,
    0
  ),
  new BookDto("Real and Complex Analysis", realComplexAnalysisImg, 34, 11),
  // proof writing and topology first
  new BookDto(
    "Introductory Functional Analysis",
    functionalAnalysisImg,
    34,
    38
  ),
  new BookDto("Basic Mathematics", basicMathImg, 35, 6),
]);

// preCalculusTrigonometry.addEdge(calculus);
// calculus.addEdge(differentialEquations);
// calculus.addEdge(probabilityStatistics);
// proofWriting.addEdge(linearAlgebra);
// differentialEquations.addEdge(partialDifferentialEquations);
// differentialEquations.addEdge(linearAlgebra);
// calculus.addEdge(realAnalysis);
// proofWriting.addEdge(topology);
// realAnalysis.addEdge(topology);

export const subjects = [
  algebra,
  discreteMath,
  proofWriting,
  preCalculusTrigonometry,
  calculus,
  differentialEquations,
  probabilityStatistics,
  linearAlgebra,
  differentialEquations,
  partialDifferentialEquations,
  abstractAlgebra,
  realAnalysis,
  numberTheory,
  graphTheory,
  topology,
  misc,
];
