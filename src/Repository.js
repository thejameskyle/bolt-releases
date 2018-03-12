// @flow
import * as bolt from 'bolt';
import type { Project, Package } from './types';

export default class Repository {
  project: Project;
  packages: Array<Package>;

  constructor(project: Project, packages: Array<Package>) {
    this.project = project;
    this.packages = packages;
  }

  static async init(opts: { cwd: string }) {
    let project = await bolt.getProject({ cwd: opts.cwd });
    let packages = await bolt.getWorkspaces({ cwd: opts.cwd });
    return new Repository(project, packages);
  }

  async getChangedPackages(): Promise<Array<Package>> {
    const allPackages = this.packages;
    const somePackages = allPackages.slice(0, 2);
    return somePackages;
  }

  async getDependentPackages(
    packages: Array<Package>,
  ): Promise<Array<Package>> {
    // ...
    console.log(packages);
    return [];
  }
}
