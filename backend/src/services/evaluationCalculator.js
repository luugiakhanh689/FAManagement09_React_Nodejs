module.exports = class EvaluationCalculator {
  static calculate(
    processRaw,
    timelinessRaw,
    workqualityRaw,
  ) {
    const process = processRaw;
    const timeliness = timelinessRaw;
    const workquality = workqualityRaw;
    return (
      0.2 * process +
      0.2 * timeliness +
      0.6 * workquality
    ).toFixed(2);
  }
  static calculate1(teamworkRaw, presCommRaw) {
    const teamwork = teamworkRaw;
    const presComm = presCommRaw;
    return (0.5 * teamwork + 0.5 * presComm).toFixed(2);
  }
  static calculate2(
    academicMarkRaw,
    softskillRaw,
    attDisRaw,
  ) {
    const academicMark = academicMarkRaw;
    const softskill = softskillRaw;
    const attDis = attDisRaw;
    return (
      0.6 * academicMark +
      0.25 * softskill +
      0.15 * attDis
    ).toFixed(2);
  }
};
