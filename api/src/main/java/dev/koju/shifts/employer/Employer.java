package dev.koju.shifts.employer;

import dev.koju.shifts.base.BaseEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
@Getter
@Setter
public class Employer extends BaseEntity {

    @Column
    private @NotNull String name;

    public void setId(Long id) {
        super.setId(id);
    }
}
