function solution(picks, minerals) {
  // 1. divide mineral list by chunks of 5
  const dividedMinerals = [];
  while (minerals.length > 0) {
    dividedMinerals.push(minerals.splice(0, 5));
  }

  const workloads = [];
  for (const chunks of dividedMinerals) {
    // 2. Update workload based on which pick is used
    const workloadByPickType = {diamond: 0, iron: 0, stone: 0};
    for (const mineral of chunks) {
      if (mineral === "diamond") {
        workloadByPickType.diamond += 1;
        workloadByPickType.iron += 5;
        workloadByPickType.stone += 25;
      } else if (mineral === "iron") {
        workloadByPickType.diamond += 1;
        workloadByPickType.iron += 1;
        workloadByPickType.stone += 5;
      } else {
        workloadByPickType.diamond += 1;
        workloadByPickType.iron += 1;
        workloadByPickType.stone += 1;
      }
    }
    workloads.push(workloadByPickType);
  }

  // Add up number of picks
  const numPicks = picks.reduce((a, b) => a + b, 0);

  // 3. Match number of mineral workload with number of picks
  while (workloads.length > numPicks) {
    // Remove extraneous workload chunks
    workloads.pop();
  }

  // 4. sort chunks by # of minerals (diamond -> stone)
  const sortedWorkload = workloads.sort((a, b) => b.stone - a.stone);
    
  let sumWorkload = 0;
  // 5. Iterate through sorted workload, add up workload and decrement picks
  // Use diamond pick first, then iron and lastly stone
  for (const workload of sortedWorkload) {
    if (picks[0] > 0) {
      sumWorkload += workload.diamond;
      picks[0]--;
      continue;
    }
    if (picks[1] > 0) {
      sumWorkload += workload.iron;
      picks[1]--;
      continue;
    }
    if (picks[2] > 0) {
      sumWorkload += workload.stone;
      picks[2]--;
    }
  }
  return sumWorkload;
}
