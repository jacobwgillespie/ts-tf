# Possible CRD Design

Very much a WIP, this is what a potential infra CRD could look like.

Example from https://www.terraform.io/docs/providers/aws/r/instance.html

```yaml
apiVersion: aws.example.com/v1alpha1
kind: AwsAmi
metadata:
  name: ubuntu
spec:
  mostRecent: true
  filter:
    - name: name
      values:
        - ubuntu/images/hvm-ssd/ubuntu-trusty-14.04-amd64-server-*
    - name: virtualization-type
      values:
        - hvm
  owners:
    - 099720109477
---
apiVersion: example.com/v1alpha1
kind: AwsAmiState
metadata:
  name: ubuntu
spec:
  secretRef: secret
---
kind: Secret
spec:
  attributes:
    architecture: 'x86_64'
    blockDeviceMappings:
      - deviceName: '/dev/sda1'
        ebs:
          deleteOnTermination: 'true'
          encrypted: 'false'
          iops: '0'
          snapshotId: 'snap-013fb4433bd2108c7'
          volumeSize: '8'
          volumeType: 'gp2'
        noDevice: ''
        virtualName: ''
      - deviceName: '/dev/sdb'
        ebs: {}
        noDevice: ''
        virtualName: 'ephemeral0'
      - deviceName: '/dev/sdc'
        ebs: {}
        noDevice: ''
        virtualName: 'ephemeral1'
    creationDate: '2019-11-11T13:13:47.000Z'
    description: 'Canonical, Ubuntu, 14.04 LTS, amd64 trusty image build on 2019-11-07'
    filter:
      - name: name
        values:
          - ubuntu/images/hvm-ssd/ubuntu-trusty-14.04-amd64-server-*
      - name: virtualization-type
        values:
          - hvm
    hypervisor: 'xen'
    id: 'ami-0bac6fc47ad07c5f5'
    imageId: 'ami-0bac6fc47ad07c5f5'
    imageLocation: '099720109477/ubuntu/images/hvm-ssd/ubuntu-trusty-14.04-amd64-server-20191107'
    imageType: 'machine'
    mostRecent: true
    name: 'ubuntu/images/hvm-ssd/ubuntu-trusty-14.04-amd64-server-20191107'
    ownerId: '099720109477'
    owners:
      - 099720109477
    productCodes: []
    public: true
    rootDeviceName: '/dev/sda1'
    rootDeviceType: 'ebs'
    rootSnapshotId: 'snap-013fb4433bd2108c7'
    sriovNetSupport: 'simple'
    state: 'available'
    stateReason:
      code: 'UNSET'
      message: 'UNSET'
    tags: {}
    virtualizationType: 'hvm'
---
apiVersion: example.com/v1alpha1
kind: AwsInstanceImporter
metadata:
  name: web
spec:
  id: 123
---
apiVersion: example.com/v1alpha1
kind: AwsInstanceGenerator
metadata:
  name: web
spec:
  attributes:
    ami:
      valueFrom: example.com/v1alpha1/AwsAmi/ubuntu//id
    instanceType: t2.large
    tags:
      Name: HelloWorld
---
apiVersion: example.com/v1alpha1
kind: AwsInstance
metadata:
  name: web
spec:
  attributes:
    ami:
      valueFrom: example.com/v1alpha1/AwsAmi/ubuntu//id
    instanceType: t2.large
    tags:
      Name: HelloWorld
```
