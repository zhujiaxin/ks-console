/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react'
import { observer } from 'mobx-react'
import { Form, Input } from '@kube-design/components'
import styles from './index.scss'

@observer
export default class GitLabForm extends React.Component {
  render() {
    const { formData } = this.props.store
    const { formRef } = this.props
    return (
      <div className={styles.card}>
        <Form data={formData} ref={formRef}>
          <Form.Item label={t('Gitlab Server')}>
            <Input name="gitlab_source.server_name" />
          </Form.Item>
          <Form.Item label={t('Gitlab Owner')}>
            <Input name="gitlab_source.owner" />
          </Form.Item>
          <Form.Item label={t('Repository Name')}>
            <Input name="gitlab_source.repo" />
          </Form.Item>
        </Form>
      </div>
    )
  }
}
