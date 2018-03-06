/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

angular.module('ambariAdminConsole')
.config(['$translateProvider', function($translateProvider) {
  $translateProvider.translations('en',{
    'CLUSTER.ADMINISTRATOR': 'Operator',
    'CLUSTER.USER': 'Read-Only',
    'VIEW.USER': 'Use',

    'common': {
      'ambari': 'XDP',
      'apacheAmbari': 'XDP',
      'about': '关于',
      'version': '版本',
      'signOut': '登出',
      'register':'注册',
      'clusters': '集群',
      'views': '视图',
      'viewUrls': '视图URLs',
      'roles': '角色',
      'users': '用户',
      'groups': '群组',
      'versions': '版本',
      'stack': '栈',
      'details': '详情',
      'goToDashboard': '前往展示板',
      'noClusters': '没有集群',
      'noViews': '没有视图',
      'view': '视图',
      'displayLabel': '显示标签',
      'search': '搜索',
      'name': '名字',
      'any': '任何',
      'none': '无',
      'type': '种类',
      'add': '添加 {{term}}',
      'delete': '删除 {{term}}',
      'deregisterCluster': '撤销集群',
      'cannotDelete': '无法删除 {{term}}',
      'privileges': '特权',
      'cluster': '集群',
      'remoteClusters': '远程集群',
      'services':'组件',
      'clusterRole': '集群角色',
      'viewPermissions': '查看许可',
      'getInvolved': '上海逸迅信息技术有限公司版权所有',
      'license': '由Apache许可协议认证软件, 版本2.0',
      'tableFilterMessage': '{{showed}} of {{total}} {{term}} 显示中',
      'yes': 'Yes',
      'no': 'No',
      'renameCluster': '重命名集群',
      'renameClusterTip': '只能输入最多80字符的字母或者数字',
      'clusterCreationInProgress': '集群正在创建中...',
      'userGroupManagement': '用户 + 群组 管理',
      'all': '全部',
      'group': '群组',
      'user': '用户',
      'settings': '设置',
      'authentication': '验证',
      'deleteConfirmation': '您确定要删除 {{instanceType}} {{instanceName}}吗?',
      'remoteClusterDelConfirmation':'您确定要删除 {{instanceType}} {{instanceName}}吗? 该操作不可撤销.',
      'messageInstanceAffected':'以下视图实例在使用远程集群进行配置，需要重新配置: {{viewInstance}}',
      'local': '本地',
      'pam': 'PAM',
      'ldap': 'LDAP',
      'jwt': 'JWT',
      'warning': '警告',
      'filterInfo': '{{showed}} of {{total}} {{term}} 显示中',
      'usersGroups': '用户/群组',
      'enabled': '启用',
      'disabled': '禁用',
      'NA': 'n/a',
      'blockViewLabel': '板块',
      'listViewLabel': '列表',
      'rbac': '基于角色的访问控制',
      'important': '重要',
      'undo': '撤销',
      'fromGroupMark': '(from group)',
      'hidden' : '隐藏',

      'clusterNameChangeConfirmation': {
        'title': '确认集群名称变更',
        'message': '您确定要将集群名称变更为 {{clusterName}}吗?'
      },

      'loginActivities': {
        'loginActivities':'登陆活动',
        'loginMessage': '登录消息',
        'loginMessage.placeholder': '请输入登录消息',
        'buttonText.placeholder': '请输入按键文本',
        'homeDirectory': '主页路径',
        'notEmpty': '此项不可为空',
        'saveError': '保存错误',
        'message': '信息',
        'buttonText': '按钮',
        'status': '状态',
        'status.disabled': '已禁用',
        'homeDirectory.alert': '许多XDP视图将用户偏好保存在登陆了的用户的HDFS用户路径中。XDP也可以选择在用户登录时自动这些路径。',
        'homeDirectory.autoCreate': '自动创建HDFS用户路径',
        'homeDirectory.header': '用户路径创建选项',
        'homeDirectory.template': '用户路径创建模板',
        'homeDirectory.group': '默认群组',
        'homeDirectory.permissions': '许可'
      },

      'controls': {
        'cancel': '取消',
        'close': '关闭',
        'ok': 'OK',
        'save': '保存',
        'clearFilters': '清空筛选条件',
        'confirmChange': '确认更改',
        'discard': '取消',
        'remove': '移除',
        'update':'更新',
        'checkAll': '勾选全部',
        'clearAll': '清除全部'
      },

      'alerts': {
        'fieldRequired': '该项必填!',
        'fieldIsRequired': '该项必填.',
        'noSpecialChars': '不可包含特殊字符!',
        'nothingToDisplay': '无 {{term}} 可供展示.',
        'noRemoteClusterDisplay':'无可展示的远程集群.',
        'noPrivileges': '无 {{term}} 特权',
        'noPrivilegesDescription': '该 {{term}} 无任何特权.',
        'timeOut': '因为未检测到任何活动，您将在 <b>{{time}}</b> 秒后自动登出.',
        'isInvalid': '{{term}} 不可用.',
        'cannotSavePermissions': '无法保存许可',
        'cannotLoadPrivileges': '无法加载特权',
        'cannotLoadClusterStatus': '无法加载集群状态',
        'clusterRenamed': '集群已被重命名为 {{clusterName}}.',
        'remoteClusterRegistered': '集群已被注册为 {{clusterName}}.',
        'cannotRenameCluster': '无法将集群重命名为 {{clusterName}}',
        'minimumTwoChars': '最小长度为2字符.',
        'maxTwentyFiveChars': '最大长度为25字符.',
        'onlyText': '只允许小写的字母数字字符.',
        'onlyAnScore': '不可用的输入, 只有字母数字字符可用 eg: My_default_view',
        'passwordRequired':'需要密码',
        'unsavedChanges': '您有未保存的更改. 您要保存更改还是直接退出?'
      }
    },

    'main': {
      'title': '欢迎使用XDP',
      'noClusterDescription': '提供一个集群, 管理能使用集群的人, 并为XDP用户定制视图.',
      'hasClusterDescription': '监管您的集群资源, 管理能使用集群的人, 并为XDP用户定制视图.',
      'autoLogOut': '自动登出',

      'operateCluster': {
        'title': '启用您的集群',
        'description': '管理您的集群配置并监管您的服务健康状态',
        'manageRoles': '管理角色'
      },

      'createCluster': {
        'title': '创建一个集群',
        'description': '使用安装精灵来选择服务和配置您的集群',
        'launchInstallWizard': '启动安装精灵'
      },

      'manageUsersAndGroups': {
        'title': '管理用户 + 群组',
        'description': '管理能连接使用XDP的用户和群组'
      },

      'deployViews': {
        'title': '部署视图',
        'description': '创建视图例子并授予许可'
      },

      'controls': {
        'remainLoggedIn': '保持登录状态',
        'logOut': '登出'
      }
    },

    'views': {
      'instance': '实例',
      'viewInstance': '视图实例',
      'create': '创建实例',
      'createViewInstance': '创建视图实例',
      'edit': '编辑',
      'viewName': '视图名称',
      'instances': '实例',
      'instanceName': '实例名称',
      'instanceId': '实例 ID',
      'displayName': '显示名称',
      'settings': '设置',
      'advanced': '高级',
      'visible': '可见',
      'description': '描述',
      'shortUrl':'短URL',
      'instanceDescription': '实例描述',
      'clusterConfiguration': '集群配置',
      'localCluster': '本地集群',
      'remoteCluster': '远程集群',
      'registerRemoteCluster' : '注册远程集群',
      'clusterName': '集群名称',
      'custom': '自定义',
      'icon': '图标',
      'icon64': '图标64',
      'permissions': '许可',
      'permission': '许可',
      'grantUsers': '给予这些用户许可',
      'grantGroups': '给予这些群组许可',
      'configuration': '配置',
      'goToInstance': '前往实例',
      'pending': '待处理...',
      'deploying': '部署中...',
      'properties': '特征',
      'urlDelete':'删除URL',

      'clusterPermissions': {
        'label': '本地集群许可',
        'clusteradministrator': '集群管理员',
        'clusteroperator': '集群操作者',
        'clusteruser': '集群用户',
        'serviceadministrator': '组件管理员',
        'serviceoperator': '组件操作者',
        'infoMessage': '给予<strong>使用</strong>许可给以下<strong>{{cluster}}</strong> 角色:',
        'nonLocalClusterMessage': '基于集群角色继承视图<strong>使用</strong> 许可的情况只有在使用本地集群配置时才可以。'
      },

      'alerts': {
        'noSpecialChars': '不得包含任何特殊符号',
        'noSpecialCharsOrSpaces': '不得包含任何特殊符号或空格',
        'instanceExists': '名字已被使用',
        'notDefined': '视图中未定义{{term}}',
        'cannotEditInstance': '不可编辑Static的实例',
        'cannotDeleteStaticInstance': '不可删除Static的实例',
        'deployError': '部署出现错误。检查XDP服务器日志。',
        'unableToCreate': '无法创建视图实例',
        'cannotUseOption': '该视图无法选择此选项',
        'unableToResetErrorMessage': '无法重置此特征的错误信息: {{key}}',
        'instanceCreated': '已创建视图实例 {{instanceName}}',
        'unableToParseError': '无法分析错误信息: {{message}}',
        'cannotCreateInstance': '无法创建实例',
        'cannotLoadInstanceInfo': '无法加载实例信息',
        'cannotLoadPermissions': '无法加载许可',
        'cannotSaveSettings': '无法保存设置',
        'cannotSaveProperties': '无法保存特征',
        'cannotDeleteInstance': '无法删除实例',
        'cannotLoadViews': '无法加载视图',
        'cannotLoadViewUrls': '无法加载视图URLs',
        'cannotLoadViewUrl': '无法加载视图URL',
        'savedRemoteClusterInformation':'已保存远程集群信息',
        'credentialsUpdated':'资格证已更新'
      }
    },

    'urls':{
      'name':'名称',
      'url':'URL',
      'viewUrls':'视图URLs',
      'createNewUrl':'创建新URL',
      'create':'创建',
      'edit':'编辑',
      'view':'视图',
      'viewInstance':'实例',
      'step1':'创建URL',
      'step2':'选择实例',
      'step3':'分配URL',
      'noUrlsToDisplay':'无可显示的URLs',
      'noViewInstances':'无视图实例',
      'none':'无',
      'change':'更改',
      'urlCreated':'创建短URL <a href="{{siteRoot}}#/main/view/{{viewName}}/{{shortUrl}}">{{urlName}}</a>',
      'urlUpdated':'更新短URL <a href="{{siteRoot}}#/main/view/{{viewName}}/{{shortUrl}}">{{urlName}}</a>'
    },

    'clusters': {
      'switchToList': '切换至列表格式',
      'switchToBlock': '切换至板块格式',
      'role': '角色',
      'assignRoles': '将角色分配给 {{term}}',

      'alerts': {
        'cannotLoadClusterData': '无法加载集群数据'
      }
    },

    'groups': {
      'createLocal': '创建本地群组',
      'name': '群组名称',
      'members': '组员',
      'membersPlural': '{{n}} member{{n == 1 ? "" : "s"}}',

      'alerts': {
        'onlySimpleChars': '必须只包含简单字符',
        'groupCreated': '已创建群组 <a href="#/groups/{{groupName}}/edit">{{groupName}}</a>',
        'groupCreationError': '群组创建出错',
        'cannotUpdateGroupMembers': '无法更新组员',
        'getGroupsListError': '获取群组列表出错'
      }
    },

    'users': {
      'username': '用户名',
      'userName': '用户名',
      'admin': '管理员',
      'ambariAdmin': 'XDP 管理员',
      'ambariClusterURL':'XDP 集群URL',
      'changePassword': '修改密码',
      'updateCredentials':'更新资格证',
      'changePasswordFor': '修改{{userName}}的密码',
      'yourPassword': '您的密码 ',
      'newPassword': '新用户密码',
      'newPasswordConfirmation': '新用户密码确认',
      'create': '创建本地用户',
      'active': '激活',
      'inactive': '未激活',
      'status': '状态',
      'password': '密码',
      'passwordConfirmation': '密码确认',
      'userIsAdmin': '该用户是XDP管理员并拥有全部权限。',
      'showAll': '显示全部用户',
      'showAdmin': '只显示管理员用户',
      'groupMembership': '群组员',
      'userNameTip': '最大长度80个字符。不能使用 \\, &, |, <, >, ` ',

      'changeStatusConfirmation': {
        'title': '状态修改',
        'message': '您确定将用户"{{userName}}"的状态修改为{{status}}吗?'
      },

      'changePrivilegeConfirmation': {
        'title': '修改管理员权限',
        'message': '您确定要{{action}}管理员权限于用户"{{userName}}"吗?'
      },

      'roles': {
        'clusterUser': '集群用户',
        'clusterAdministrator': '集群管理员',
        'clusterOperator': '集群操作者',
        'serviceAdministrator': '组件管理员',
        'serviceOperator': '组件操作者 ',
        'ambariAdmin': 'XDP管理员',
        'viewUser': '查看用户',
        'none': '无',
        'oneRolePerUserOrGroup': '每个用户或群组只允许一个角色',
        'permissionLevel': '{{level}}-级别 的许可'
      },

      'alerts': {
        'passwordRequired': '需要密码',
        'wrongPassword': '密码不匹配!',
        'usernameRequired':'需要用户名',
        'cannotChange': '无法修改{{term}}',
        'userCreated': '已创建用户 <a href="#/users/{{encUserName}}">{{userName}}</a>',
        'userCreationError': '用户创建出错',
        'removeUserError': '从群组错误中移除',
        'cannotAddUser': '无法添加用户至群组',
        'passwordChanged': '密码已更改。',
        'cannotChangePassword': '无法修改密码',
        'roleChanged': '{{name}} 更改为 {{role}}',
        'roleChangedToNone': '{{user_name}}的特权已被修改为 \'无\'. 该用户的权限现在皆来自于所属群组',
        'usersEffectivePrivilege': '{{user_name}}\从群组获取的权限比您选择的权限要高。'
      }
    },

    'versions': {
      'current': '当前版本',
      'addVersion': '添加版本',
      'defaultVersion': '(默认版本定义)',
      'inUse': '使用中',
      'installed': '已安装',
      'usePublic': "使用公共库",
      'networkIssues': {
        'networkLost': "为什么该项不可用?",
        'publicDisabledHeader': "公共库选项不可选",
        'publicRepoDisabledMsg': 'XDP无法连接网络所以无法使用公共库安装软件。您的选择:',
        'publicRepoDisabledMsg1': '配置您的主机来连接网络',
        'publicRepoDisabledMsg2': '如果您在使用网络代理，参考XDP文档来配置XDP以使用网络代理。',
        'publicRepoDisabledMsg3': '使用本地库'
      },
      'selectVersion': "现在版本",
      'selectVersionEmpty': "无其他库",
      'useLocal': "使用本地库",
      'uploadFile': '上传版本定义文件',
      'enterURL': '版本定义文件URL',
      'defaultURL': 'https://',
      'readInfo': '读取版本信息',
      'browse': '浏览',
      'installOn': '安装...',
      'register': {
        'title': '注册版本',
        'error': {
          'header': '无法注册',
          'body': '您使用的Base URL 您*必须*检查您的Base URLs并确保每个版本的Base URL都不一样'
        }
      },
      'deregister': '注销版本',
      'deregisterConfirmation': '您确定要注销版本<strong>{{versionName}}</strong> ?',
      'placeholder': '版本号 (0.0)',
      'repos': '库',
      'os': '操作系统',
      'baseURL': 'Base URL',
      'skipValidation': '跳过库Base URL有效性检测 (高级)',
      'noVersions': '选择版本显示细节',
      'patch': '补丁',
      'maint': '维护',
      'introduction': '要在XDP中注册新版本，提供一份版本定义文件，确认软件库信息并保存版本',
      'contents': {
        'title': '内容',
        'empty': '无可显示内容'
      },
      'details': {
        'stackName': '栈名',
        'displayName': '显示名称',
        'version': '版本',
        'actualVersion': '实际版本',
        'releaseNotes': '发布信息'
      },
      'repository': {
        'placeholder': '输入Base URL或移除该操作系统'
      },
      'useRedhatSatellite': {
        'title': '使用RedHat Satellite/Spacewalk',
        'warning': '一旦勾选<b>“使用RedHat Satellite/Spacewalk”</b>选项，' +
        '您要自己负责在Satellite/Spacewalk中配置库通道和确认选中的<b>栈版本</b>的库在集群中所有的主机上都可用。' +
        '更多信息请参考大数据平台文档',
        'disabledMsg': '在使用公共库时不可使用RedHat Satellite/Spacewalk'
      },
      'changeBaseURLConfirmation': {
        'title': '确认修改Base URL',
        'message': '您将要修改正在使用的库的基地址。请确认您有意进行此操作并且新的基地址指向的地方不变'
      },

      'alerts': {
        'baseURLs': '请为您正在配置的操作系统提供基地址。',
        'validationFailed': '一些库未通过有效性检测。请更改基地址。如果您确定地址是正确的，请跳过有效性检测环节',
        'skipValidationWarning': '<b>警告:</b> 此项仅为高级用户设置. 如果您想跳过存储库基地址的有效性检测，请使用此选项.',
        'useRedhatSatelliteWarning': '停止使用分散库并转为使用RedHat Satellite/Spacewalk管道',
        'filterListError': '获取栈版本筛选列表出错',
        'versionCreated': '已创建版本 <a href="#/stackVersions/{{stackName}}/{{versionName}}/edit">{{stackName}}-{{versionName}}</a>',
        'versionCreationError': '版本创建错误',
        'allOsAdded': '已添加所有操作系统',
        'osListError': '获取所有支持的操作系统列表出错',
        'readVersionInfoError': '读取版本定义出错',
        'versionEdited': '已编辑版本 <a href="#/stackVersions/{{stackName}}/{{versionName}}/edit">{{displayName}}</a>',
        'versionUpdateError': '版本更新出错',
        'versionDeleteError': '版本删除出错'
      }
    },

    'authentication': {
      'description': 'XDP 支持验证创建和保存在XDP数据库里的本地XDP用户，或者验证LDAP服务器:',
      'ldap': 'LDAP验证',
      'on': '开启',
      'off': '关闭',

      'connectivity': {
        'title': 'LDAP 连接配置',
        'host': 'LDAP 服务器主机',
        'port': 'LDAP 服务器端口',
        'ssl': '使用SSL?',
        'trustStore': {
          'label': 'Trust Store',
          'options': {
            'default': '默认JDK',
            'custom': '自定义'
          }
        },
        'trustStorePath': 'Trust Store路径',
        'trustStoreType': {
          'label': 'Trust Store类型',
          'options': {
            'jks': 'JKS',
            'jceks': 'JCEKS',
            'pkcs12': 'PKCS12'
          }
        },
        'trustStorePassword': 'Trust Store密码',
        'dn': '绑定DN',
        'bindPassword': '绑定密码',

        'controls': {
          'testConnection': '测试连接'
        }
      },

      'attributes': {
        'title': 'LDAP 特征配置',
        'detection': {
          'label': '用来验证或查找用户或群组的特征可以被手动指明，也可自动探测。请选择:',
          'options': {
            'manual': '手动定义特征',
            'auto': '自动检测特征'
          }
        },
        'userSearch': '用户搜索',
        'groupSearch': '群组搜索 Base',
        'detected': '检测到以下特征，请检查并测试这些特征以确保他们的准确性',
        'userObjClass': '用户类',
        'userNameAttr': '用户名特征',
        'groupObjClass': '群组类',
        'groupNameAttr': '群组名特征',
        'groupMemberAttr': '群成员特征',
        'distinguishedNameAttr': '不重复的名称特征',
        'test': {
          'description': '要快速测试选中的特征，点击下面的按钮。在这个过程中你可以指明一个测试用户名和密码，XDP 会尝试验证和取回群组成员信息',
          'username': '测试用户名',
          'password': '测试密码'
        },
        'groupsList': '群组列表',

        'controls': {
          'autoDetect': '进行自动检测',
          'testAttrs': '测试特征'
        },

        'alerts': {
          'successfulAuth': '验证成功'
        }
      },

      'controls': {
        'test': '测试'
      }
    }
  });

  $translateProvider.preferredLanguage('en');
}]);
