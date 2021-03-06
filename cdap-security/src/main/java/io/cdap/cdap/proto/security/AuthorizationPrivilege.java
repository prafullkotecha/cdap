/*
 * Copyright © 2017 Cask Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

package io.cdap.cdap.proto.security;

import io.cdap.cdap.proto.id.EntityId;

import java.util.Objects;

/**
 * Key for caching Privileges on containers. This represents a specific privilege on which authorization can be
 * enforced. The cache stores whether the enforce succeeded or failed.
 */
public class AuthorizationPrivilege {
  private final EntityId entityId;
  private final Action action;
  private final Principal principal;

  public AuthorizationPrivilege(Principal principal, EntityId entityId, Action action) {
    this.entityId = entityId;
    this.action = action;
    this.principal = principal;
  }

  public Principal getPrincipal() {
    return principal;
  }

  public EntityId getEntity() {
    return entityId;
  }

  public Action getAction() {
    return action;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AuthorizationPrivilege that = (AuthorizationPrivilege) o;
    return Objects.equals(entityId, that.entityId) && action == that.action &&
      Objects.equals(principal, that.principal);
  }

  @Override
  public int hashCode() {
    return Objects.hash(entityId, action, principal);
  }

  @Override
  public String toString() {
    return "AuthorizationPrivilege{" +
      "entityId=" + entityId +
      ", action=" + action +
      ", principal=" + principal +
      '}';
  }
}
