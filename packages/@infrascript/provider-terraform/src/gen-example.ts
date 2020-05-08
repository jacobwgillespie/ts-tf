/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import {Vpc} from './__generated__/aws/Vpc'
import {InternetGateway} from './__generated__/aws/InternetGateway'
import {EksCluster} from './__generated__/aws/EksCluster'
import {IamRole} from './__generated__/aws/IamRole'
import {IamRolePolicyAttachment} from './__generated__/aws/IamRolePolicyAttachment'

function render(val: {render(): object}) {
  console.log(JSON.stringify(val.render(), undefined, 2))
}

// Variables

const name = 'example'
const k8sVersion = '1.15'

const clusterRole = new IamRole(name, {assume_role_policy: ''})
render(clusterRole)

render(
  new IamRolePolicyAttachment('cluster', {
    policy_arn: 'arn:aws:iam::aws:policy/AmazonEKSClusterPolicy',
    role: clusterRole.name,
  }),
)

const cluster = new EksCluster(name, {
  name,
  role_arn: clusterRole.arn,
  version: k8sVersion,
  vpc_config: [
    {
      security_group_ids: new Set(['123']),
      subnet_ids: new Set(['123']),
    },
  ],
})
render(cluster)

const workerRole = new IamRole(name, {name_prefix: cluster.name, assume_role_policy: ''})
render(workerRole)

render(
  new IamRolePolicyAttachment('workers-policy', {
    policy_arn: 'arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy',
    role: workerRole.name,
  }),
)

render(
  new IamRolePolicyAttachment('workers-cni', {
    policy_arn: 'arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy',
    role: workerRole.name,
  }),
)

render(
  new IamRolePolicyAttachment('workers-ecr-read-access', {
    policy_arn: 'arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly',
    role: workerRole.name,
  }),
)

const vpc = new Vpc('vpc', {
  cidr_block: '10.0.0.0/16',
  enable_dns_hostnames: true,
  enable_dns_support: true,
  tags: {
    Name: 'example',
  },
})
render(vpc)

const internetGateway = new InternetGateway('vpc', {
  vpc_id: vpc.id,
  tags: {
    Name: 'example',
  },
})
render(internetGateway)
