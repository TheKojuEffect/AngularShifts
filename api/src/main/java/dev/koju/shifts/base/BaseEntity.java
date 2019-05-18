package dev.koju.shifts.base;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class BaseEntity extends AbstractPersistable<Long> {

}
